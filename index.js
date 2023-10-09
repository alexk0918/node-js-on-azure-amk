const http = require('http');
const url = require('url');
const dt = require('./datetime');
const express = require('express');
const cors = require('cors'); // Add the CORS middleware

const app = express();
const port = process.env.PORT || 1337;

app.use(cors()); // Enable CORS for all routes

// RESTful API routes here
app.get('/', (req, res) => {
    // Generate a random number between 1 and 6
    const randomValue = Math.floor(Math.random() * 6) + 1;
    
    // Respond with the random value
    res.json({ diceValue: randomValue });
});

app.get('/', (req, res) => {
    // Hello World.
    res.send('<h3>Hello World!</h3>');
});

app.listen(port, () => {
    console.log("Server running at http://localhost:%d", port);
});
