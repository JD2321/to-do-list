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
  database : 'task_app'
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

//load home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

//add task
app.get('/add-task', (req, res) => {

})
//edit task
app.get('/edit-task', (req, res) => {
  
})
//delete task 
app.get('/delete-task', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});