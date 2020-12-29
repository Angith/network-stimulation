'use strict'

const Validator = require("../validators/validate");
const ResponseHelper = require("../helpers/responseHelper");
const ProcessOperations = require("./processOperations");

class ProcessController extends ProcessOperations {
  constructor(request, response) {
    super();
    this.request = request;
    this.response = response;
    this.validator = new Validator(request, response);
    this.responseHelper = new ResponseHelper(response);
  }

  process() {
    const res = this.validator.validate();
    if(!this.isObject(res)) {
      const response = {
        'status': 'nok',
        'error': res
      }
      return this.responseHelper.sendResponse(400, response);
    }
    const commandType = Object.keys(res)[0];
    const command = res[commandType];

    this.processCommand(commandType, command);
  }

  processCommand(commandType, command) {
    if (commandType == 'create') {
      if(command == '/device') {
        return this.addDevice();
      } else if (command == '/connections') {
        return this.responseHelper.sendResponse(500, {'error': 'Sorry, This command is not ready yet'});
      } else {
        const response = {
          'status': 'nok',
          'error': 'Invalid Command'
        }
        return this.responseHelper.sendResponse(400, response);
      }
    } else if (commandType == 'fetch') {
      if(command == '/device') {
        return this.fetchDevices();
      } else if (command.includs('info-routes')) {
        return this.responseHelper.sendResponse(500, {'error': 'Sorry, This command is not ready yet'});
      } else {
        const response = {
          'status': 'nok',
          'error': 'Invalid Command'
        }
        return this.responseHelper.sendResponse(400, response);
      }
    } else if (commandType == 'modify') {
      if (command.includs('strength')) {
        return this.responseHelper.sendResponse(500, {'error': 'Sorry, This command is not ready yet'});
      } else {
        const response = {
          'status': 'nok',
          'error': 'Invalid Command'
        }
        return this.responseHelper.sendResponse(400, response);
      }
    } else {
      const response = {
        'status': 'nok',
        'error': 'Invalid Command Type'
      }
      return this.responseHelper.sendResponse(400, response);
    }
  }

  isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]'
  }

}

module.exports = ProcessController;