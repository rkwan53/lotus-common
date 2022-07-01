// import { models } from 'mongoose';
// import { ModuleFilenameHelpers } from 'webpack';

const recentQuote = require('../models/recentQuoteModel');
const axios = require('axios');
const savedQuote = require('../models/savedQuoteModel');
const quoteController = {};

quoteController.getQuote = (req, res, next) => {
  //generate random number to access a quote from the API
  let quoteNum = Math.floor(Math.random() * 1500);
  axios
    .get('https://type.fit/api/quotes')
    .then((data) => {
      res.locals.quote = data.data[quoteNum];
      recentQuote.create(data.data[quoteNum]);
      res.status(201);
      return next();
    })
    .catch((error) => {
      console.error(error);
    });
};

//save generated quotes to the db
quoteController.saveQuote = (req, res, next) => {
  savedQuote
    .create(req.body)
    .then((data) => {
      res.locals.id = data.id;
      return next();
    })
    .catch((error) => {
      return next(
        'error in quoteController.saveQuote:' + JSON.stringify(error)
      );
    });
};

//get all saved quotes
quoteController.getSavedQuotes = (req, res, next) => {
  savedQuote.find({}, (err, quotes) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err)
      return next(
        'Error in userController.getAllUsers: ' + JSON.stringify(err)
      );

    // console.log('find all quotes data -->', quotes);
    res.locals.allSavedQuotes = quotes;
    return next();
  });
};
//input and save a quote to the db

//delete a quote from the saved db
quoteController.deleteQuote = (req, res, next) => {
  console.log('request body -->', req.body)
  // console.log('req.body.id--->', req.body.data);
  savedQuote.deleteOne(req.body).then(() => {
    return next();
  });
  // return next();
};

module.exports = quoteController;