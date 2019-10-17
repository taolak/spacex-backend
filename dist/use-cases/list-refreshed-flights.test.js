"use strict";

var _flightsDb = _interopRequireDefault(require("../data-access/flights-db"));

var _db = require("../../tests/fixtures/db");

var _listRefreshedFlights = _interopRequireDefault(require("./list-refreshed-flights"));

var _app = _interopRequireDefault(require("../constants/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('post refresh', () => {
  let flightsDb, db, flights;
  beforeEach(async () => {
    db = await (0, _db.makeDb)();
    flights = db.collection(_app.default.COLLECTION_NAME);
    flightsDb = (0, _flightsDb.default)({
      makeDb: _db.makeDb,
      appConst: _app.default
    });
  });
  afterEach(async () => {
    await (0, _db.clearDb)();
  });
  afterAll(async () => {
    await (0, _db.closeDb)();
  });
  it('detect missing refresh terms', async () => {
    flightsDb = (0, _flightsDb.default)({
      makeDb: _db.makeDb,
      appConst: _app.default
    });
    const listRefreshedFlights = (0, _listRefreshedFlights.default)({
      flightsDb
    });
    const refreshedData = await listRefreshedFlights(undefined);
    expect(refreshedData).toEqual({
      'code': 400,
      message: 'You must supply refresh terms'
    });
  });
  it('detect missing land_success field', async () => {
    flightsDb = (0, _flightsDb.default)({
      makeDb: _db.makeDb,
      appConst: _app.default
    });
    const listRefreshedFlights = (0, _listRefreshedFlights.default)({
      flightsDb
    });
    const refreshedData = await listRefreshedFlights({});
    expect(refreshedData).toEqual({
      'code': 400,
      message: 'You must supply a valid land_success'
    });
  });
  it('detect missing reused field', async () => {
    flightsDb = (0, _flightsDb.default)({
      makeDb: _db.makeDb,
      appConst: _app.default
    });
    const listRefreshedFlights = (0, _listRefreshedFlights.default)({
      flightsDb
    });
    const refreshedData = await listRefreshedFlights({
      land_success: false
    });
    expect(refreshedData).toEqual({
      'code': 400,
      message: 'You must supply a valid reused'
    });
  });
  it('detect missing with_reddit field', async () => {
    flightsDb = (0, _flightsDb.default)({
      makeDb: _db.makeDb,
      appConst: _app.default
    });
    const listRefreshedFlights = (0, _listRefreshedFlights.default)({
      flightsDb
    });
    const refreshedData = await listRefreshedFlights({
      land_success: false,
      reused: false
    });
    expect(refreshedData).toEqual({
      'code': 400,
      message: 'You must supply a valid with_reddit'
    });
  });
  it('detect missing with_reddit field', async () => {
    flightsDb = (0, _flightsDb.default)({
      makeDb: _db.makeDb,
      appConst: _app.default
    });
    const listRefreshedFlights = (0, _listRefreshedFlights.default)({
      flightsDb
    });
    const refreshedData = await listRefreshedFlights({
      land_success: false,
      reused: false,
      with_reddit: false,
      _last: {}
    });
    expect(refreshedData).toEqual({
      'code': 400,
      message: 'Too many arguments'
    });
  });
});