const mongoose = require('mongoose');
const db = `mongodb+srv://Barley:${process.env.MONGO_PW}@cluster0.qtfsg.mongodb.net/budget`;
const colors = require('colors');

function connectDb() {
  mongoose.connect(db)
    .then(() => console.log('Database is connected succesfully'.underline.bgYellow))
    .catch(() => console.log("Database is can not connect".underline.bgRed))
}

module.exports = connectDb