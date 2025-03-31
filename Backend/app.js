const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const connectToDb = require('./DB/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
connectToDb();

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow cookies to be sent
}));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get('/', (req, res) => {
    res.send("Welcome maa");
})

console.log("App.js tak to thik hai")

app.use('/users', userRoutes);
app.use('/captain',captainRoutes);

module.exports = app;