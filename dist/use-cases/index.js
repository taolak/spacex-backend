"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listRefreshedFlights = void 0;

var _listRefreshedFlights = _interopRequireDefault(require("./list-refreshed-flights"));

var _dataAccess = _interopRequireDefault(require("../data-access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const listRefreshedFlights = (0, _listRefreshedFlights.default)({
  flightsDb: _dataAccess.default
});
exports.listRefreshedFlights = listRefreshedFlights;