const db = require('../models');

// Retrieve all Users from the database.
exports.findUserFriends = (req, res) => {
  console.log();
  db.sequelize.query(`SELECT u.id, u.first_name, u.last_name, u.avatar FROM userfriends uf INNER JOIN users u ON uf.friend_id = u.id WHERE user_id=${req.params.userId};`)
    .then((data) => {
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving user friends.',
      });
    });
};
