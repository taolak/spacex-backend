"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDb = makeDb;
exports.default = void 0;

var _flightsDb = _interopRequireDefault(require("./flights-db"));

var _app = _interopRequireDefault(require("../constants/app"));

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MongoClient = _mongodb.default.MongoClient;
const url = process && process.env && process.env.SPACEX_DB_URL || "mongodb://heroku_nwhht6xg:q0k40mr7thqp500a2pl5b7b420@ds335648.mlab.com:35648";
const dbName = process && process.env && process.env.SPACEX_DB_NAME || "heroku_nwhht6xg";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }

  return client.db(dbName);
}

const flightsDb = (0, _flightsDb.default)({
  makeDb,
  appConst: _app.default
});
var _default = flightsDb;
exports.default = _default;