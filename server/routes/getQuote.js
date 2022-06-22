const express = require('express');
const quoteController = require('../controllers/quoteController');
const recentQuote = require('../models/recentQuoteModel');
const saveQuote = require('../models/savedQuoteModel');
const path = require('path');
const { nextTick } = require('process');

const router = express.Router();


//router to find all saved quotes
router.get('/all', quoteController.getSavedQuotes, (req, res)=>{
  return res.send(res.locals.allSavedQuotes)
})

//router for / to generate single page
router.get('/', quoteController.getQuote, (req, res) => {
  console.log('in router, quote -->', res.locals.quote);
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
router.post('/', quoteController.saveQuote, (req, res, next) => {
  console.log('in router saveQuote, req.body --->', req.body);
  // saveQuote.create(req.body)
  // .catch((err) => {
  //   return next('Error in quoteController.getQuote: ' + JSON.stringify(err));
  // });
  return res.sendStatus(201);
});

//router to delete

//router to update

module.exports = router;
