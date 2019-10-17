"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listRefreshedFlights = exports.listWithRedditFlights = exports.listReusedFlights = exports.listLandSuccessFlights = void 0;

var _listLandSuccessFlights = _interopRequireDefault(require("./list-land-success-flights"));

var _listReusedFlights = _interopRequireDefault(require("./list-reused-flights"));

var _listWithRedditFlights = _interopRequireDefault(require("./list-with-reddit-flights"));

var _listRefreshedFlights = _interopRequireDefault(require("./list-refreshed-flights"));

var _dataAccess = _interopRequireDefault(require("../data-access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const listLandSuccessFlights = (0, _listLandSuccessFlights.default)({
  flightsDb: _dataAccess.default
});
exports.listLandSuccessFlights = listLandSuccessFlights;
const listReusedFlights = (0, _listReusedFlights.default)({
  flightsDb: _dataAccess.default
});
exports.listReusedFlights = listReusedFlights;
const listWithRedditFlights = (0, _listWithRedditFlights.default)({
  flightsDb: _dataAccess.default
});
exports.listWithRedditFlights = listWithRedditFlights;
const listRefreshedFlights = (0, _listRefreshedFlights.default)({
  flightsDb: _dataAccess.default
});
exports.listRefreshedFlights = listRefreshedFlights;