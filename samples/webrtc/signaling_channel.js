function SignalingChannel() {
    var sessionId;
    userId = createId();

    function createId() {
        return 'device-' + (Math.floor((Math.random() * 100000) + 1));
    };

    var channel = null;
    var subscribed = false;

    var ws = null;

    function subscribe(channel) {
        ws.send(JSON.stringify({
            "flubnub": "subscribe",
            "channels": [channel],
        }));
    }

    // Message handler for incoming data
    //
    function onmessage(msg) {
        envelope = JSON.parse(msg.data);
        console.log(envelope);

        channel.didGetData({
            message: envelope.message,
        });
    }

    function publish(data) {
        ws.send(JSON.stringify({
            "channel": sessionId,
            "message": data,
        }));
    }

    this.connect = function(peer, host, port) {
        return new Promise(function(resolve, reject) {
            sessionId = peer;
            ws = new WebSocket("ws://" + host + ":" + port);
            // Install event handlers.
            ws.onmessage = onmessage;
            ws.onopen = () => { resolve(ws); };
        }).then(ws => {
            subscribe(userId);
            publish({
                'device': userId,
                'type': 'connect',
                'payload': '',
            })
            channel = new PeerChannel(peer);
            return {'channel': channel};
        });
    };

    function PeerChannel(peerUserId) {
        var listeners = {
            "onmessage": null,
        };
        for (var name in listeners)
            Object.defineProperty(this, name, createEventListenerDescriptor(name, listeners));

        this.didGetData = function (data) {
            fireEvent({"type": "message", "data": data }, listeners);
        };

        var sendQueue = [];

        function processSendQueue() {
            publish(sendQueue[0]);
            sendQueue.shift();
            if (sendQueue.length > 0)
                processSendQueue();
        }

        this.disconnect = function () {
            publish({
                'device': userId,
                'type': 'disconnect',
                'payload': '',
            })
        }

        this.send = function (message) {
            if (sendQueue.push(message) == 1)
                processSendQueue();
        };
    }

    function createEventListenerDescriptor(name, listeners) {
        return {
            "get": function () { return listeners[name]; },
            "set": function (cb) { listeners[name] = cb instanceof Function ? cb : null; },
            "enumerable": true
        };
    }

    function fireEvent(evt, listeners) {
        var listener = listeners["on" + evt.type]
            if (listener)
                listener(evt);
    }
}
