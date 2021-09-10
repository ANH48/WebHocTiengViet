const express = require('express');
const newsRouter = express.Router();


newsRouter.get('/',(req,res,next) => {
  res.send("API is working")
  })

module.exports = newsRouter 
