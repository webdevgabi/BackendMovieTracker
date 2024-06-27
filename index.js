const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { connect } = require('./database');
app.use(connect);

const routes = require('./routes');
app.use('/', routes)

app.listen(3000, () => console.log('http://localhost:3000/'))