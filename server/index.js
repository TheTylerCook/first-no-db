const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const config = require('./config.js')
// const geolocator = require('./components/geolocator')

const app = express()
const port = 5111

app.use(bodyParser.json())
app.use(cors())


app.get(`/api/displayweather`, (req,res) => {
    axios.get(`http://api.wunderground.com/api/72cd601d61e9a83c/conditions/q/UT/Provo.json`)
    .then(response => {
        res.status(200).send(response.data)
    
    });
})
app.get('/api/locationService', (req,res) => {
    axios.get(`http://api.wunderground.com/api/72cd601d61e9a83c/geolookup/q/autoip.json`)
    .then(response => {
        res.status(200).send(response.data)
    });
})
    
    




// http://api.wunderground.com/api/72cd601d61e9a83c/geolookup/q/autoip.json
// http://api.wunderground.com/api/72cd601d61e9a83c/conditions/q/UT/Provo.json


// https://api.darksky.net/forecast/a605e90b3a6dd7f3c54201128e99b01d/40.2338,111.6585



app.listen(port, () => console.log(`Your Server Is Running On Port ${port}`))
