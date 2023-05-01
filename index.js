const express = require('express')
const app = express()
const chefs = require('./chefs.json')
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello Are you Okey? Hello Are you Okey?')
})
app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.listen(port, () => {
  console.log(`Server side running on this port ${port}`)
})

