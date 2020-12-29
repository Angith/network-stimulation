'use strict'

const Device = require("./Devices");

const devices = [];

class ProcessOperations {
  addDevice() {
    const type = this.validator.get('type');
    const name = this.validator.get('name');
    if (!type || !name ) {
      return this.responseHelper.sendResponse(400, {'error': 'Parameter Mismatch: type or name is missing'});
    }
    const device = new Device(name, type);
    devices.push(device);
    const response = {
      'status': 'ok',
    }
    return this.responseHelper.sendResponse(200,response);
  }

  fetchDevices() {
    const response = {
      'status': 'ok',
      'devices': devices
    }
    return this.responseHelper.sendResponse(200,response);
  }
}

module.exports = ProcessOperations;