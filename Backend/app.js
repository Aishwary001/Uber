const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const connectToDb = require('./DB/db');
const userRoutes = require('./routes/user.routes');
connectToDb();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get('/', (req, res) => {
    res.send("Welcome maa");
})

app.use('/users', userRoutes);

module.exports = app;