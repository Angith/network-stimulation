'use strinct'

class ResponseHelper {
  constructor(response) {
    this.response = response;
  }

  sendResponse(status, response) {
    this.response.status(status).json(response);
  }
}

module.exports = ResponseHelper;