var Store = require('flux/utils').Store;
var PinConstants = require('../constants/pin_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var PinStore = new Store(AppDispatcher);

var _pins = {};

PinStore.all = function() {
	var pins = []
	console.log(_pins);
	Object.keys(_pins).forEach(function(pinId) {
		pins.push(_pins[pinId])
	});

	return pins;
};

PinStore.find = function(id) {
	return _pins[id];
};

PinStore.__onDispatch = function(payload) {
	switch (payload.actionType) {
		case PinConstants.PINS_RECEIVED:
			PinStore.receivePins(payload.pins);
			break;
		case PinConstants.PIN_RECEIVED:
			PinStore.receiveSinglePin(payload.pin);
			break;
	}
};

PinStore.receivePins = function(pins) {
	console.log("Store", pins);
	_pins = {};
	pins.forEach(function(pin) {
		_pins[pin.id] = pin;
	});
	console.log(_pins);
	PinStore.__emitChange();
};

PinStore.receiveSinglePin = function(pin) {
	_pins[pin.id] = pin;
	PinStore.__emitChange();
};

PinStore.removePin = function(pin) {
	delete _pins[id];
	PinStore.__emitChnage();
};

module.exports = PinStore;
