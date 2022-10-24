/*const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();

const {
  handleGetAll,
  handlePost,
  handleGetOne,
  handleAuthenticate
} = require('../controllers/users');
const isTokenValid = require('../middlewares/isTokenValid');

router.get('/', isTokenValid, handleGetAll);
router.get('/:id', asyncHandler(handleGetOne))

router.post('/', asyncHandler(handlePost))
router.post('/connexion', asyncHandler(handleAuthenticate))

module.exports = router
*/