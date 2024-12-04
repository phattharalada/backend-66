const express = require('express')
const app = express()

app.get('/', function (req, res) { // Home Route
 res.send('Hello World')
})
app.get('/aboutme', function (req, res) { // About me Route
   res.send('About me')
})
app.get('/my-html', function (req, res) { // HTML Route
  res.send('My HTML')
})
app.get('/my-json-api', function (req, res) { // JSON-API Route
  res.send('JSON API')
})

app.listen(3000, () => {
   console.log("Server started on port 3000 !")
})
