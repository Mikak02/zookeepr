const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// requiring the data
const { animals } = require('./data/animals.json');
// first step is to require the npm package
const express = require('express');
// telling app to use the variable port
const PORT = process.env.PORT || 3001;
// second step is to instantiate the server
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// tells server to use css and js


  
// method to make the server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });