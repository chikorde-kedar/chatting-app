var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');

//Import the routes for the node server
var chat = require('./routes/chat');

mongoose.Promise = global.Promise;

//Connection to the local mongodb
mongoose.connect('mongodb://localhost:27017/chatting_app')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

var app = express();

//Create routes for the node server
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/chatting-app')));
app.use('/', express.static(path.join(__dirname, 'dist/chatting-app')));
app.use('/login', express.static(path.join(__dirname, 'dist/chatting-app')));
app.use('/dashboard', express.static(path.join(__dirname, 'dist/chatting-app')));
app.use('/chat', express.static(path.join(__dirname, 'dist/chatting-app')));
app.use('/charts', express.static(path.join(__dirname, 'dist/chatting-app')));
app.use('/chat', chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;