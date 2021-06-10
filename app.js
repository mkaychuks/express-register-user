const express = require('express'); // import the express module
const mongoose = require('mongoose'); // import mongoose package
require('dotenv/config');

const app = express(); // express init app

// init mongoose connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log('server running on port 5000...');
    });
  })
  .catch((err) => console.log(err));
