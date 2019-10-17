"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _controllers = require("./controllers");

var _expressCallback = _interopRequireDefault(require("./express-callback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.get('/land-success', (0, _expressCallback.default)(_controllers.getLandSuccess));
app.get('/reused', (0, _expressCallback.default)(_controllers.getReused));
app.get('/with-reddit', (0, _expressCallback.default)(_controllers.getWithReddit));
app.post('/refresh', (0, _expressCallback.default)(_controllers.postRefreshed));
const port = process && process.env && process.env.PORT || undefined || '5000';
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
var _default = app;
exports.default = _default;