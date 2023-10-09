const http = require('http');
const express = require('express');
const cors = require('cors'); // Add the CORS middleware

const app = express();
const port = process.env.PORT || 1337;

app.use(cors()); // Enable CORS for all routes

// Define your RESTful API route for rolling the dice
app.get('/rollDice', (req, res) => {
    // Generate a random number between 1 and 6
    const randomValue = Math.floor(Math.random() * 6) + 1;

    // Respond with the random value as JSON
    res.json({ diceValue: randomValue });
});

app.listen(port, () => {
    console.log("Server running at http://localhost:%d", port);
});
