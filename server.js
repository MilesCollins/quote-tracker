console.log('May Node be with you')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
// this creates a server that the browser can listen to 
app.listen(3000, function () {
    console.log('Listening on 3000')
})

app.get( '/',  (req, res) => {
    res.sendFile(__dirname + '/index.html')
} )

app.post('/quotes', (req, res) => {
    console.log(req.body)
  })