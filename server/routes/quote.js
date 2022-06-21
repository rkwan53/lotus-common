const express = require('express');
const userController = require('../controllers/JokesController');

const router = express.Router();


//router for / to generate single page
router.get('/', quoteController.getQuote, (req, res) => {
  const { quote } = res.locals
res.status(200).json({ quote });
} )

