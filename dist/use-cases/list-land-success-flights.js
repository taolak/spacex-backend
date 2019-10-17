"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  flightsDb
}) => {
  return async () => {
    //TODO: add future validations
    return await flightsDb.findLandSuccess();
  };
};

exports.default = _default;