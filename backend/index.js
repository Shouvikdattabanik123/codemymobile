const express = require('express');

const dotenv = require('dotenv');

const cors = require('cors');

const db = require('./models');

dotenv.config({});

const router = require('./routes/route');

const app = express();

db.sequelize.sync();

app.use(cors());

app.use('/', router);

app.listen(process.env.port, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});

module.exports = app;
