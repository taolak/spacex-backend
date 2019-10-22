"use strict";

var _flightsDb = _interopRequireDefault(require("./flights-db"));

var _db = require("../../tests/fixtures/db");

var _response = _interopRequireDefault(require("../../tests/fixtures/mocks/response"));

var _refreshData = _interopRequireDefault(require("../../tests/fixtures/mocks/refresh-data"));

var _app = _interopRequireDefault(require("../constants/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('flights db', () => {
  let flightsDb, db, flights;
  beforeEach(async () => {
    db = await (0, _db.makeDb)();
    flights = db.collection(_app.default.COLLECTION_NAME); //using dependency injenction

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
  it('Refresh when: {land_success:false,reused:false,with_reddit:true}', async () => {
    await flights.insertOne(_refreshData.default[0]);
    await flights.insertOne(_refreshData.default[1]);
    let params = {
      land_success: false,
      reused: false,
      with_reddit: true
    };
    const found = await flightsDb.processRefresh(params);
    expect(found).toEqual(_response.default);
  });
  it('Refresh when: {land_success:true,reused:false,with_reddit:true}', async () => {
    await flights.insertOne(_refreshData.default[0]);
    await flights.insertOne(_refreshData.default[1]);
    let params = {
      land_success: true,
      reused: false,
      with_reddit: true
    };
    const found = await flightsDb.processRefresh(params);
    expect(found).toEqual(_response.default);
  });
  it('Refresh when: {land_success:true,reused:false,with_reddit:false}', async () => {
    await flights.insertOne(_refreshData.default[0]);
    await flights.insertOne(_refreshData.default[1]);
    let params = {
      land_success: true,
      reused: false,
      with_reddit: false
    };
    const found = await flightsDb.processRefresh(params);
    expect(found).toEqual(_response.default);
  });
  it('Refresh when: {land_success:false,reused:true,with_reddit:false}', async () => {
    await flights.insertOne(_refreshData.default[0]);
    await flights.insertOne(_refreshData.default[1]);
    let params = {
      land_success: false,
      reused: true,
      with_reddit: false
    };
    const found = await flightsDb.processRefresh(params);
    expect(found).toEqual([]);
  });
  it('Refresh all flags are false', async () => {
    let params = {
      land_success: false,
      reused: false,
      with_reddit: false
    };
    const found = await flightsDb.processRefresh(params);
    expect(found).toEqual({
      'code': 400,
      message: 'One filter flag must be true'
    });
  });
});