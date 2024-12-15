const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectToDb = require('./DB/db');
connectToDb();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome maa");
})

module.exports = app;