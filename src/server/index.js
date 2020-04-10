const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
app.use(express.static('dist'))

/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =  require('cors')
app.use(cors());

console.log(__dirname)

var aylien = require("aylien_textapi");
var apiAylien = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

var apiResponse = {}

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(8081, function () {
    console.log('Server listening on localhost:8081')
})

app.get('/test', cors(), function (req, res) {
    console.log(req);
    res.send(mockAPIResponse)
})

app.post('/test', cors(), function (req, res) {
    apiAylien.sentiment({
        text: req.body.userInput,
        mode: req.body.modeOfUserInput
      }, function(error, response) {
        if (error === null) {
          apiResponse = response;  
          console.log(`Response from Aylien API call for sentiment is...`);
          console.log(apiResponse);
          res.send(apiResponse)
        }
      });
      
})

module.exports = apiResponse
