const express = require('express')

const app = express();
const PORT = process.env.PORT || 5000;

// Sample route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});