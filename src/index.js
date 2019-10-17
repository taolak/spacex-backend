import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import callback from './express-callback'
import {
  getLandSuccess,
  getReused,
  getWithReddit,
  postRefreshed
} from './controllers'

dotenv.config()

const app = express()

app.use(bodyParser.json())

app.get('/', (_, req, res) => {
  res.send('Welcome to spacex')
  next()
});

app.get('/land-success', callback(getLandSuccess))
app.get('/reused', callback(getReused))
app.get('/with-reddit', callback(getWithReddit))
app.post('/refresh', callback(postRefreshed))

const port = process.env.PORT || '5000'
app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})

export default app