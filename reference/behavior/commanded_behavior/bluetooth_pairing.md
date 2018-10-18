# Bluetooth Pairing
In this state, Kuri is actively trying to connect to a new bluetooth device. This is indicated with the bluetooth pairing animation: Kuri looks up and closes her eyes and a repeated light pairing pattern displays on her chest.

## Entering Bluetooth Pairing
* Bluetooth pairing is entered if the user says:
	- "Hey Kuri, pair with my device"
	- "Hey Kuri, connect"
	- "Hey Kuri, pair a new device"
* Bluetooth pairing is entered if the app sends the command:
        - 'bluetooth_connect_and_pair' (equivalent to "pair with my device")
        - 'bluetooth_pair_new' (equivalent to "pair new")

## Preconditions
* Kuri has been onboarded

## Pairing Behavior
* Kuri waits in this state for 60 seconds or until a new device is connected.
* If Kuri is not connected to a bluetooth device and detects a previously connected device in the vicinity, she will connect to it (in order of last-connected-to).
* If Kuri is already connected to a bluetooth device and the user did not say "pair with a **new** device", she will attempt to connect to previously connected devices.
* If the user says "Hey Kuri, pair a **new** device", then auto-connection is disabled.
* If Kuri successfully connects to a bluetooth device, she reacts with a small acknowledgement animation and a success sound.
* If Kuri is unable to connect to a bluetooth device after 60 seconds, she stops the bluetooth pairing animation and goes back to idle.

## Exiting Bluetooth Pairing
* If you tap Kuri on the head or tell her to do something else with a voice command, she will stop the bluetooth pairing animation but a user will still have 60 seconds from the intitial request to connect their bluetooth device.
* If a bluetooth connection or timeout happens while Kuri is not in the Bluetooth Pairing state, she will not react to the successful connection or timeout.

# Bluetooth Disconnect
Bluetooth can be disconnected if:
* The user says "Hey Kuri, disconnect"
* The app sends the command 'bluetooth_disconnect'
