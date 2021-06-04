const express = require('express');
const userRouter = require('./routes/user');

const app = express();

// app Middlewares
app.use(express.json()); // body-parser sturvs

app.use('/api/v1/', userRouter); // registration of the routers

app.listen(5000, () => {
  console.log('Server listening on port 5000...');
});
