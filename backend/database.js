const mongoose = require('mongoose');
require('dotenv').config();
const connection = process.env.ATLAS_URI;
mongoose.connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
