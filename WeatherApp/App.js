const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/anyWeather", async (req,res) => {
    res.sendFile(__dirname + '/weather.html')
})
app.post("/anyWeather", async (req,res) => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+req.body.province+"&appid=1e9337b3055fef44005cc4d61842ed62&units=metric&lang=th"
        const response = await axios.get(url)
        const province = response.data["name"]
        const temp = response.data["main"]["temp"]
        res.send("จังหวัด"+province+" มีอุณหภูมิ = " + temp + " องศาเซลเซียส")
    }
)
app.listen(3000, () => {
    console.log('Server started on port 3000')
})