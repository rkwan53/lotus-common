const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const port = 3000;
const mongoURI = process.env.URI;

mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  console.log('in get homepage');
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../public/index.html'));
});

/**
 * 404 handler
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;