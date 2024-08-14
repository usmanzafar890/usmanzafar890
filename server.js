const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Initialize the app
const app = express();

// Load environment variables from a .env file
dotenv.config();

// Define the port
const PORT = process.env.PORT || 5000;

// Define a route for the root URL
app.get('/', async (req, res) => {
    try {
        // Make a GET request to the external API
        const response = await axios.get('https://65a4eca552f07a8b4a3df3c9.mockapi.io/usman/user');

        // Send the response data from the external API
        res.send(response.data);
    } catch (error) {
        // Send an error message if the API call fails
        res.status(500).send({ error: "Failed to fetch data from external API" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
