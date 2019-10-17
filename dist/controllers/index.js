"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRefreshed = exports.getWithReddit = exports.getReused = exports.getLandSuccess = void 0;

var _useCases = require("../use-cases");

var _getLandSuccess = _interopRequireDefault(require("./get-land-success"));

var _getReused = _interopRequireDefault(require("./get-reused"));

var _getWithReddit = _interopRequireDefault(require("./get-with-reddit"));

var _postRefresh = _interopRequireDefault(require("./post-refresh"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getLandSuccess = (0, _getLandSuccess.default)({
  listLandSuccessFlights: _useCases.listLandSuccessFlights
});
exports.getLandSuccess = getLandSuccess;
const getReused = (0, _getReused.default)({
  listReusedFlights: _useCases.listReusedFlights
});
exports.getReused = getReused;
const getWithReddit = (0, _getWithReddit.default)({
  listWithRedditFlights: _useCases.listWithRedditFlights
});
exports.getWithReddit = getWithReddit;
const postRefreshed = (0, _postRefresh.default)({
  listRefreshedFlights: _useCases.listRefreshedFlights
});
exports.postRefreshed = postRefreshed;