import makeFlightsDb from './flights-db'
import appConst from '../constants/app'
import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const dbName = process.env.SPACEX_DB_NAME
let client = null

export async function makeDb () {
  try {
    client = await MongoClient.connect(
      process.env.SPACEX_DB_URI, 
      { useUnifiedTopology: true, useNewUrlParser: true }
    )
    return client.db(dbName)
  } catch (error) {
    return {code: 400, message: "Unable to reach database."}
  }
}

const flightsDb = makeFlightsDb({ makeDb, appConst })
export default flightsDb