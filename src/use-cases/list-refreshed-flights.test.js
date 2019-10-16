import makeFlightsDb from '../data-access/flights-db'
import  { makeDb, closeDb, clearDb } from '../../tests/fixtures/db'
import makeListRefreshedFlights from './list-refreshed-flights'
import  appConst from '../constants/app'

describe('post refresh', () => {
  let flightsDb, db, flights

  beforeEach(async () => {
    db = await makeDb()
    flights = db.collection(appConst.COLLECTION_NAME)

    flightsDb = makeFlightsDb({ makeDb, appConst })
  })

  afterEach(async () => { 
    await clearDb() 
  });

  afterAll(async () => { 
    await closeDb() 
  });

  it('detect missing refresh terms', async () => {
    flightsDb = makeFlightsDb({ makeDb, appConst })
    const listRefreshedFlights = makeListRefreshedFlights({ flightsDb })
    const refreshedData = await listRefreshedFlights(undefined)
    expect(refreshedData).toEqual({'code': 400, message: 'You must supply refresh terms'})
  })

  it('detect missing land_success field', async () => {
    flightsDb = makeFlightsDb({ makeDb, appConst })
    const listRefreshedFlights = makeListRefreshedFlights({ flightsDb })
    const refreshedData = await listRefreshedFlights({})
    expect(refreshedData).toEqual({'code': 400, message: 'You must supply a valid land_success'})
  })

  it('detect missing reused field', async () => {
    flightsDb = makeFlightsDb({ makeDb, appConst })
    const listRefreshedFlights = makeListRefreshedFlights({ flightsDb })
    const refreshedData = await listRefreshedFlights({land_success: false})
    expect(refreshedData).toEqual({'code': 400, message: 'You must supply a valid reused'})
  })

  it('detect missing with_reddit field', async () => {
    flightsDb = makeFlightsDb({ makeDb, appConst })
    const listRefreshedFlights = makeListRefreshedFlights({ flightsDb })
    const refreshedData = await listRefreshedFlights({land_success: false, reused: false})
    expect(refreshedData).toEqual({'code': 400, message: 'You must supply a valid with_reddit'})
  })

  it('detect missing with_reddit field', async () => {
    flightsDb = makeFlightsDb({ makeDb, appConst })
    const listRefreshedFlights = makeListRefreshedFlights({ flightsDb })
    const refreshedData = await listRefreshedFlights({land_success: false, reused: false, with_reddit:false, _last: {}})
    expect(refreshedData).toEqual({'code': 400, message: 'Too many arguments'})
  })
})

