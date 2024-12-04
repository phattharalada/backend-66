const express = require('express');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.get('/index.html', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
} );
app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + "/public/styles.css");
});
//Cal
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/", (req, res) => {
    var result = Number(req.body.num1) + Number(req.body.num2)
    res.send("นำเลข 2 ตัวมาบวกกัน ได้ผลลัพธ์คือ = " + result);
});
//bmi GET PATH
app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/public/bmiCalculator.html");
});
app.post("/bmiCalculator",(req, res) => {
    const w = Number(req.body.weight)
    const h = Number(req.body.height)
    const resultbmi = w / (h*h)
    let message = `ค่า BMI ได้ผลลัพธ์คือ = ${resultbmi.toFixed(2)}\n คุณอยู่ในเกณฑ์\n`;
    if (resultbmi < 18.5) {
        message += "ผอมเกินไป";
    } else if (resultbmi < 22.9) {
        message += "น้ำหนักปกติ เหมาะสม";
    } else if (resultbmi < 24.9) {
        message += "น้ำหนักเกิน";
    } else if (resultbmi < 29.9) {
        message += "อ้วน";
    } else {
        message += "อ้วนมาก";
    }

    res.send(message);
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});