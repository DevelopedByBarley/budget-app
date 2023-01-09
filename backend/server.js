require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5050;
const cors = require('cors');

app.use(cors());

app.get('/', (req,res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})