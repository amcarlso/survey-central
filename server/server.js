const express = require('express');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session');
const ac = require('./authController');
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());
app.use(session({    // setting up sessions
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

massive(CONNECTION_STRING).then( db => {   // connecting to the db
  console.log('connected to the database');
  app.set('db', db); 
  app.listen(SERVER_PORT, () => {   // connecting to the server
    console.log(`Server listening on port ${SERVER_PORT}`)
  });
}).catch( err => {
  console.log('uh oh!', err)
})

//auth endpoints
app.post('/auth/register', ac.register);
app.post('/auth/login', ac.login);
app.get('/auth/logout', ac.logout)