import {MongoClient} from 'mongodb'
import {MongoMemoryServer} from 'mongodb-memory-server'

let connection, db

const  makeDb = async () => {
  const mongod = new MongoMemoryServer();
  const uri = await mongod.getConnectionString();
  const dbName = await mongod.getDbName();

  connection =
    connection || (await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }))
  db = db || (await connection.db(dbName))
  return db
},
closeDb = async () => {
  await connection.close()
  await db.close()
},
clearDb = async () => {
  await db.collection('flights').deleteMany({})
  return true
}

module.exports = { makeDb, closeDb, clearDb }