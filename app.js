const express = require('express');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// creating a mongoose connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(5000, () => {
      console.log('Server listening on port 5000...!!');
    })
  )
  .catch((err) => console.log(err));

//
app.use(express.json()); // body-parser sturvs

app.use('/api/v1/', userRouter); // registration of the routers
