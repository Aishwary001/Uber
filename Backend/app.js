const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome maa");
})

module.exports = app;