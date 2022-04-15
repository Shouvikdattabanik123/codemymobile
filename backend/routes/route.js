const express = require('express');

const router = express.Router();
const user = require('../controllers/user.controller');
const userFriends = require('../controllers/userFriends.controller');

// REST API Implementation ::: get Friends List
router.get('/getFriendsList', user.findAll);

// REST API Implementation ::: get Friends List By User
router.get('/getFriendsListByUser/:userId', userFriends.findUserFriends);

module.exports = router;
