const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('NodeJS-Server Test Application')
})

app.get('/health/readiness', (req, res) => {
    res.send('Readiness End Point')
})

app.get('/health/liveness', (req, res) => {
    res.send('Liveness End Point')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})