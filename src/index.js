import express from 'express'
import bodyParser from 'body-parser'
import {
  getLandSuccess,
  getReused,
  getWithReddit,
  postRefreshed
} from './controllers'
import makeCallback from './express-callback'

const app = express()
app.use(bodyParser.json())

app.get('/land-success', makeCallback(getLandSuccess))
app.get('/reused', makeCallback(getReused))
app.get('/with-reddit', makeCallback(getWithReddit))
app.post('/refresh', makeCallback(postRefreshed))

const port = process.env.PORT || '5000'
app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})

export default app