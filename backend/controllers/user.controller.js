const db = require('../models');

const User = db.user;
// const Op = db.Sequelize.Op;

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  console.log(req.query);
  const page = req.query.page;
  const size = req.query.size;
  const limit = size ? +size : 10;
  const offset = page ? (page - 1) * limit : 0;
  User.findAll({ limit, offset })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};
