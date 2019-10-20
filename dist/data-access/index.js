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

async function makeDb() {
  try {
    const client = await MongoClient.connect(process && process.env && process.env.SPACEX_DB_URI || "mongodb://taolak:Taolak2012@ds335648.mlab.com:35648/heroku_nwhht6xg", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    return client.db(process && process.env && process.env.SPACEX_DB_NAME || "heroku_nwhht6xg");
  } catch (error) {
    return {
      code: 400,
      message: "Unable to reach database."
    };
  }
}

const flightsDb = (0, _flightsDb.default)({
  makeDb,
  appConst: _app.default
});
var _default = flightsDb;
exports.default = _default;