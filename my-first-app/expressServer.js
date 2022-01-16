'use strict'

const express = require('express');
const app = express();
const sessions = require('./sessions.json');
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('<h1>first app by express app</h1>');
});

app.get('/api/sessions', (req, res) => {
    res.json(sessions);
});

app.listen(port, () => {
    console.log(`server running at ${port}`);
});