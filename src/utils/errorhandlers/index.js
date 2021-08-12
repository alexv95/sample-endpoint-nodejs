
const { format } = require("url");
const { STATUS_CODES } = require("http");

class HTTPError  {
  constructor(code, message) {
      this.statusCode = code;
      this.message = message;
  }
}


module.exports = { HTTPError };