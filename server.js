//dont forget to start mamp for db!


//node server

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const port = 3000;

//mysql connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'to-do-list'
});

db.connect((err) =>  {
  if(err) {
    throw err;
  } else {
    console.log('database connected!');
  }
})

//resources 
app.use('/static', express.static(path.join(__dirname, '/resources')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});