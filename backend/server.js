const express = require('express');
const cors= require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// test api route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
    });

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});