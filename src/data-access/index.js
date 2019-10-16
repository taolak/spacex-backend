import makeFlightsDb from './flights-db'
import appConst from '../constants/app'
import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const url = process.env.SPACEX_DB_URL
const dbName = process.env.SPACEX_DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })

export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

const flightsDb = makeFlightsDb({ makeDb, appConst })
export default flightsDb