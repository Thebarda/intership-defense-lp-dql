const express = require('express')
const app = express()
app.use(express.static(__dirname + '/build'))
app.get('/', function(req, res) {
    res.sendFile('index.html')
})

app.listen(3000)
console.log("http://localhost:3000/")
console.log("http://127.0.0.1:3000/")