/*var isMozilla = window.mozRTCPeerConnection && !window.webkitRTCPeerConnection;*/
if (!window.RTCPeerConnection) {
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
}

var selfView;
var remoteView;
var audioOnlyView;
var signalingChannel;
var pc;
var peer;
var localStream;
var chatDiv;
var chatText;
var chatButton;
var channel;

window.onbeforeunload = function(){
    if (peer) {
        peer.disconnect();
    }
}

if (!window.hasOwnProperty("orientation"))
    window.orientation = -90;

var configuration = {
  "iceServers": [
  {
    "urls": "stun:mayfieldrobotics-coturn-yhcdzt.c2x.io",
    "urls": "stun:stun4.l.google.com:19302",
  },
  {
    "urls": "turn:mayfieldrobotics-coturn-yhcdzt.c2x.io",
    "username": "gizmo",
    "credential": "MZrZN7wuJgRu0saLVCy8RxGxNAf9wrvT"
  },
  ]
};
window.onload = function () {
    selfView = document.getElementById("self_view");
    remoteView = document.getElementById("remote_view");
    var joinButton = document.getElementById("join_but");
    audioOnlyView = document.getElementById("audio-only-container");
    var shareView = document.getElementById("share-container");
    chatText = document.getElementById("chat_txt");
    chatButton = document.getElementById("chat_but");
    chatDiv = document.getElementById("chat_div");

    signalingChannel = new SignalingChannel();

    joinButton.disabled = !navigator.mediaDevices.getUserMedia;
    joinButton.onclick = function (evt) {
        navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
            localStream = stream;
            peerJoin();
        })

        function peerJoin() {
            var flubnubHost = document.getElementById("flubnub_host").value;
            var flubnubPort = document.getElementById("flubnub_port").value;
            var sessionId = document.getElementById("session_txt").value;
            signalingChannel.connect(sessionId, flubnubHost, flubnubPort)
                .then(function (evt) {

                    shareView.style.visibility = "hidden";

                    peer = evt.channel;
                    peer.onmessage = handleMessage;

                    peer.ondisconnect = function () {
                        remoteView.style.visibility = "hidden";
                        if (pc)
                            pc.close();
                        pc = null;
                    };
                });
        }
    };
};

// handle signaling messages received from the other peer
function handleMessage(evt) {
    var message = evt.data.message;

    if (!pc && (message.type == 'sdp_offeranswer' || message.type == 'ice_candidate'))
        start(false);

    if (message.type == 'sdp_offeranswer') {
        pc.setRemoteDescription(new RTCSessionDescription({
            "sdp": message.payload.sdp,
            "type": message.payload.type
        }), function () {
            // if we received an offer, we need to create an answer
            if (pc.remoteDescription.type == "offer")
                localStream.getTracks().forEach(track => pc.addTrack(track, localStream));
                pc.createAnswer(localDescCreated, logError);
        }, logError);
    } else {
        var candidate = message.payload;
        console.log("adding ICE candidate: " + JSON.stringify(candidate));
        pc.addIceCandidate(new RTCIceCandidate(candidate), function () {}, logError);
    }
}

// call start() to initiate
function start(isInitiator) {
    pc = new RTCPeerConnection(configuration);

    // send any ice candidates to the other peer
    pc.onicecandidate = function (evt) {
        if (evt.candidate) {
            peer.send({
                "type": "ice_candidate",
                "device": "whocares",
                "payload": evt.candidate
            });
            console.log("candidate emitted: " + JSON.stringify(evt.candidate));
        } else {
            console.log("ICE candidate gathering done");
        }
    };

    // start the chat
    pc.ondatachannel = function (evt) {
        channel = evt.channel;
        setupChat();
    };

    // once the remote stream arrives, show it in the remote video element
    pc.onaddstream = function (evt) {
        console.log(evt);
        remoteView.srcObject = evt.stream;
        remoteView.style.visibility = "visible";
    };
}

function localDescCreated(desc) {
    pc.setLocalDescription(desc, function () {
        peer.send({
            "type": "sdp_offeranswer",
            "device": "whocares",
            "payload": desc
        });
        var logMessage = "localDescription set and sent to peer: " + JSON.stringify(desc);
        console.log(logMessage);
    }, logError);
}

function logError(error) {
    if (error) {
        if (error.name && error.message)
            log(error.name + ": " + error.message);
        else
            log(error);
    } else
        log("Error (no error message)");
}

function log(msg) {
    log.div = log.div || document.getElementById("log_div");
    log.div.appendChild(document.createTextNode(msg));
    log.div.appendChild(document.createElement("br"));
}

// setup chat
function setupChat() {
    channel.onopen = function () {
        chatDiv.style.visibility = "visible";
        chatText.style.visibility = "visible";
        chatButton.style.visibility = "visible";
        chatButton.disabled = false;

        //On enter press - send text message.
        chatText.onkeyup = function(event) {
            if (event.keyCode == 13) {
                chatButton.click();
            }
        };

        chatButton.onclick = function () {
            if(chatText.value) {
                postChatMessage(chatText.value, true);
                channel.send(chatText.value);
                chatText.value = "";
                chatText.placeholder = "";
            }
        };
    };

    // recieve data from remote user
    channel.onmessage = function (evt) {
        postChatMessage(evt.data);
    };

    function postChatMessage(msg, author) {
        var messageNode = document.createElement('div');
        var messageContent = document.createElement('div');
        messageNode.classList.add('chatMessage');
        messageContent.textContent = msg;
        messageNode.appendChild(messageContent);

        if (author) {
            messageNode.classList.add('selfMessage');
        } else {
            messageNode.classList.add('remoteMessage');
        }

        chatDiv.appendChild(messageNode);
        chatDiv.scrollTop = chatDiv.scrollHeight;
    }
}
