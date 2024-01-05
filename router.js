const express = require('express');
const router = express.Router();
const { Bulk, Score, Add } = require('./controller');
// Define your routes here

// GET /api/users
router.get('/countries', Bulk);//Bulk gives all countries and capitals
router.get('/score',Score);//Score gives the score of all user
router.post('/add', Add);//Add adds the score of the user



module.exports = router;
