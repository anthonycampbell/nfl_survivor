const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('dotenv').config();
require('./database');
app.use(bodyParser.json());
app.use(cors());
// API
const users = require('./api/users');
app.use('/api/users', users);
app.use(express.static(path.join(__dirname, "client", "build")))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
