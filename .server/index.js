import parser from 'body-parser'
import express from 'express'
import path from 'path'

const PORT = 3000

const app = express()
const staticPath = path.join(__dirname, '../')
app.use(express.static(staticPath))

app.listen(PORT, function () {
  console.log(`Serving site on ${PORT}`)
})
