"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  flightsDb
}) => {
  return async request => {
    if (!request) return {
      'code': 400,
      message: 'You must supply refresh terms'
    };
    if (!request.hasOwnProperty('land_success') || typeof request.land_success !== "boolean") return {
      'code': 400,
      message: 'You must supply a valid land_success'
    };
    if (!request.hasOwnProperty('reused') || typeof request.reused !== "boolean") return {
      'code': 400,
      message: 'You must supply a valid reused'
    };
    if (!request.hasOwnProperty('with_reddit') || typeof request.with_reddit !== "boolean") return {
      'code': 400,
      message: 'You must supply a valid with_reddit'
    };
    if (Object.keys(request).length > 3) return {
      'code': 400,
      message: 'Too many arguments'
    };
    return await flightsDb.processRefresh(request);
  };
};

exports.default = _default;