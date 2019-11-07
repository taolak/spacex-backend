import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import callback from './express-callback'
import { postRefreshed } from './controllers'

dotenv.config()

const app = express()

app.use(bodyParser.json())

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (_req, res) => {
  res.send('Welcome to spacex')
  next()
});

app.post('/refresh', callback(postRefreshed))

const port = process.env.PORT || '5000'
app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})

export default app