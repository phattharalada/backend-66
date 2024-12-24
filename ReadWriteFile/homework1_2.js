const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('This is index page');
 });
 app.get('/about', (req, res) => {
    res.send(`
        <html>
            <head>
                <style>
                    body {
                        background-color: blue;
                        color: white;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 50px;
                    }
                </style>
            </head>
            <body>
                <h1>This is about page</h1>
            </body>
        </html>
    `);
 });
 
 app.get('/my-json-api', (req, res) => {
    res.json({"myJsonKey": "myJsonValue"});
 });
 app.get('/my-json-api3', (req, res) => {
    res.send({"University": "PIM"});
});
app.get('/users2',(req, res) => {
    const jsonData = [
        { id: 1, firstname: 'Somchai', lastname: 'Jaidee' },
        { id: 2, firstname: 'Tony', lastname: 'Stark' }
    ];
    res.send(jsonData);
})
app.get('/read-users', (req, res) => {
    fs.readFile('users.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.parse(data));
    });
});
 app.listen(3000,() => (
    console.log("Server start")
))