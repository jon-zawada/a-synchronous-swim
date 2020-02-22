const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue.js')
// const keypressHandler = require('./js/keypressHandler');


// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  if (req.method === 'GET') {
    // var commands = ['up', 'down', 'left', 'right'];
    // var index = Math.floor(Math.random() * commands.length)
    // messages.enqueue('hi')
    // messages.dequeue()
    //
    res.end(messages.dequeue()); //['up', 'down', 'left', 'right']
  } else {
    res.end();
  }
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
