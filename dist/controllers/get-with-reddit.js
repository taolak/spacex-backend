"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  listWithRedditFlights
}) => {
  return async httpRequest => {
    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      const withRedditData = await listWithRedditFlights();
      return {
        headers,
        statusCode: 200,
        body: withRedditData
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
};

exports.default = _default;