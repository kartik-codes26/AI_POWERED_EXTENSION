const express = require('express');
const cors= require('cors');
const app = express();

const summarizeRouter = require('./routes/summarize');

app.use(cors());
app.use(express.json());

// test api route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
    });

// summarize route
app.use('/api', summarizeRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
