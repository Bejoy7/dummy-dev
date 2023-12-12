const express = require('express')
const app = express()

PORT = process.env.PORT || 8081
app.get('/', function (req, res) {
  res.status(200)
  .send(' This is a dummy project created as a part of Cloud Computing by Bejoy Chate & Vikramaditya Nagilla.')
})

app.listen(PORT, () => console.log (`Server is running: http://localhost:${PORT}`))
