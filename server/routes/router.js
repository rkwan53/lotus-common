const express = require('express');
const quoteController = require('../controllers/quoteController');
const recentQuote = require('../models/recentQuoteModel');

const router = express.Router();

//router for / to generate single page
router.get('/', quoteController.getQuote, (req, res) => {
  console.log('in router, quote -->', res.locals);
  recentQuote.create(res.locals.quote);
  console.log('current directory -->', __dirname);
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '/../../../public/index.html'));
});

//router to post
router.post('/', quoteController.saveQuote);

//router to delete

//router to update

module.exports = router;
