const express = require('express')
const app = express()

PORT = process.env.PORT || 8080
app.get('/', function (req, res) {
  res.status(200)
  .send('Hello! This is a dummy project created as a part of Cloud Computing by Bejoy Chate & Vikramaditya Nagilla.')
})

app.listen(PORT, () => console.log (`Server is running: http://localhost:${PORT}`))