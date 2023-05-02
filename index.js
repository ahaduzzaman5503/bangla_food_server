const express = require('express');
const cors = require('cors');
const app = express();
const chefs = require('./chefs.json');
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Are you Okey? Hello Are you Okey?')
});

app.get('/chefs', (req, res) => {
  res.send(chefs)
});

app.get('/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const chef = chefs.find(chef => chef.id === id) || {};
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Server side running on this port ${port}`)
})

