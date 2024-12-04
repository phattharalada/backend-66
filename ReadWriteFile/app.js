const express = require('express')
const app = express()

let fs = require('fs');

fs.writeFile('demofile1.txt', 'test content', 'utf8', (err) => {
 if (!err) console.log('write complete!!')
 else console.log('Connot write file')
});

fs.writeFile('demofile1.txt', 'test content', 'utf8', (err, data) => {
    console.log(data)
   });

fs.writeFile('demofile1.txt', 'test content', 'utf8', (err) => {
    if (!err) console.log('write file 2 complete!!')
    else console.log('Connot write file')
    fs.writeFile('demofile1.txt', 'test content', 'utf8', (err, data) => {
        console.log(data)
       });
    });
app.listen(3000, () => {
  console.log("Server started on port 3000 !")
})
