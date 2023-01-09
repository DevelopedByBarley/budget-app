require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5050;
const cors = require('cors');
const path = require('path');
const connectDb = require('../backend/database/db/connectToDb')

app.use(cors());

app.get('/helloWorld', (req,res) => {
  res.send('Hello world!')
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../', 'frontend', 'build')));
  app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')); });
}

connectDb();

app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})