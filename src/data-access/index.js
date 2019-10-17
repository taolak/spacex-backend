import makeFlightsDb from './flights-db'
import appConst from '../constants/app'
import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient

export async function makeDb () {
  try {
    const client = await MongoClient.connect(
      process.env.SPACEX_DB_URI, 
      { useUnifiedTopology: true, useNewUrlParser: true }
    )
    return client.db(process.env.SPACEX_DB_NAME)
  } catch (error) {
    return {code: 400, message: "Unable to reach database."}
  }
}

const flightsDb = makeFlightsDb({ makeDb, appConst })
export default flightsDb