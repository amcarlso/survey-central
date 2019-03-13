const express = require('express');
require('dotenv').config();
const {CONNECTION_STRING, SERVER_PORT} = process.env;

const app = express();

app.use(express.json());


app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`)
});