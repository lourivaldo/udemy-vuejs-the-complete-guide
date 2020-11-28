const express = require('express');
const consign = require('consign');

const app = express();

consign()
    .then('./config/middlewares.js')
    .into(app)

app.listen(3000, () => {
    console.log('Listen on localhost:3000');
});
