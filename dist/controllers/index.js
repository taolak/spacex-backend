"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRefreshed = void 0;

var _useCases = require("../use-cases");

var _postRefresh = _interopRequireDefault(require("./post-refresh"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postRefreshed = (0, _postRefresh.default)({
  listRefreshedFlights: _useCases.listRefreshedFlights
});
exports.postRefreshed = postRefreshed;