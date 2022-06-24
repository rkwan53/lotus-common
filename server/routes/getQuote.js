const express = require('express');
const quoteController = require('../controllers/quoteController');
const recentQuote = require('../models/recentQuoteModel');
const savedQuote = require('../models/savedQuoteModel');
const path = require('path');
const { nextTick } = require('process');

const router = express.Router();

//router to find all saved quotes
router.get('/all', quoteController.getSavedQuotes, (req, res) => {
  return res.send(res.locals.allSavedQuotes);
});

//router for / to generate single page
router.get('/', quoteController.getQuote, (req, res) => {
  return res.send(res.locals.quote);
  // recentQuote
  //   .create(res.locals.quote)
  //   .then((data) => {
  //     res.locals.quote = data.quote;
  //     return res.send(res.locals.quote);
  //   })
  //   .catch((err) => {
  //     return next('Error in quoteController.getQuote: ' + JSON.stringify(err));
});

//router to post
router.post('/', quoteController.saveQuote, (req, res) => {
  return res.sendStatus(201);
  // .catch((err) => {
  //   return next('Error in quoteController.getQuote: ' + JSON.stringify(err));
  });

//router to delete
router.delete('/', quoteController.deleteQuote, (req, res) => {
  return res.sendStatus(200);
})
//router to update/add custom quote

module.exports = router;
