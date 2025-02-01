const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/runashblog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Basic route
app.get('/', (req, res) => {
    res.send('RunAsh AI Blog API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
