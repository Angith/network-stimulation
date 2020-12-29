'use strict'

class Validator {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  validate() {
    const commandTypes = [
      'create',
      'fetch',
      'modify'
    ];

    let commandType, command;
    for (let type of commandTypes) {
      command = this.get(type);
      if (command) {
        commandType = type;
        break;
      }
    }
    if (!command) {
      return "Parameter Mismatch: request should contain CommandType";
    } else {
      return {
        [commandType]: command
      };
    }
  };

  get(name) {
    if (name in this.request.params) {
      return this.request.params[name];
    } else if (name in this.request.query) {
      return this.request.query[name];
    } else if (name in this.request.body) {
      return this.request.body[name];
    } else if (name in this.request.headers) {
      return this.request.headers[name];
    }
    return null;
  }
}


module.exports = Validator;