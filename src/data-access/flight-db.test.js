import makeFlightsDb from './flights-db'
import  { makeDb, closeDb, clearDb } from '../../tests/fixtures/db'
import  response from '../../tests/fixtures/mocks/response'
import  filterData from '../../tests/fixtures/mocks/filter-data'
import  refreshData from '../../tests/fixtures/mocks/refresh-data'
import  appConst from '../constants/app'

describe('flights db', () => {
    let flightsDb, db, flights
  
    beforeEach(async () => {
      db = await makeDb()
      flights = db.collection(appConst.COLLECTION_NAME)

      //using dependency injenction
      flightsDb = makeFlightsDb({ makeDb, appConst })
    })

    afterEach(async () => { 
      await clearDb() 
    });

    afterAll(async () => { 
      await closeDb() 
    });
  
    it('Find land sucess flight', async () => {
      await flights.insertOne(filterData)
      const found = await flightsDb.findLandSuccess()
      expect(found).toEqual(response)
    })

    it('Find flight with reused elemennt', async () => {
      await flights.insertOne(filterData)
      const found = await flightsDb.findReused()
      expect(found).toEqual(response)
    })

    it('Find flight with reddit links', async () => {
      await flights.insertOne(filterData)
      const found = await flightsDb.findWithReddit()
      expect(found).toEqual(response)
    })

    it('Refresh when: {land_success:false,reused:false,with_reddit:true}', async () => {
      
      await flights.insertOne(refreshData[0])
      await flights.insertOne(refreshData[1])

      let params = { land_success: false, reused: false, with_reddit: true }
      
      const found = await flightsDb.processRefresh(params)
      expect(found).toEqual(response)
    })

    it('Refresh when: {land_success:true,reused:false,with_reddit:true}', async () => {
      
      await flights.insertOne(refreshData[0])
      await flights.insertOne(refreshData[1])


      let params = { land_success: true, reused: false, with_reddit: true }
      
      const found = await flightsDb.processRefresh(params)
      expect(found).toEqual(response)
    })

    it('Refresh when: {land_success:true,reused:false,with_reddit:false}', async () => {
      
      await flights.insertOne(refreshData[0])
      await flights.insertOne(refreshData[1])


      let params = { land_success: true, reused: false, with_reddit: false }
      
      const found = await flightsDb.processRefresh(params)
      expect(found).toEqual(response)
    })

    it('Refresh when: {land_success:false,reused:true,with_reddit:false}', async () => {
      
      await flights.insertOne(refreshData[0])
      await flights.insertOne(refreshData[1])


      let params = { land_success: false, reused: true, with_reddit: false }
      
      const found = await flightsDb.processRefresh(params)
      expect(found).toEqual([])
    })

    it('Refresh all flags are false', async () => {
      
      let params = { land_success: false, reused: false, with_reddit: false }
      
      const found = await flightsDb.processRefresh(params)
      expect(found).toEqual({'code': 400, message: 'One filter flag must be true'})
    })
  })

