const express = require('express');
const consign = require('consign');
require('dotenv').config();
const db = require('./config/db');

const app = express();
app.db = db

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Listen on localhost:3000');
});
