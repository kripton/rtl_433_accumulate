#!/usr/bin/env node

var express = require('express');
var readline = require('readline');

var app = express();

// Reply with our sensorStates when asked via HTTP
app.get('/', function (req, res) {
  res.json(sensorStates);
})

// Set up the HTTP listener
var port = process.env.PORT || 3005;
var host = process.env.HOST || '127.0.0.1';
console.log('Starting HTTP listener on ' + host + ':' + port + ' ...');
app.listen(port, host);

// Set up the reading from STDIN
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Initialize our sensorStates as empty
var sensorStates = {};

// Process incoming information
rl.on('line', function(line){
    console.log(line);

    try {
      var obj = JSON.parse(line);
      var sensorKey = obj.model.replace(/\s/g, '_');
      if (obj.channel) {
        sensorKey = sensorKey + '_channel_' + obj.channel;
      }
      if (obj.rc) {
        sensorKey = sensorKey + '_rc_' + obj.rc;
      }
      if (obj.id) {
        sensorKey = sensorKey + '_id_' + obj.id;
      }
      sensorStates[sensorKey] =  obj;
    } catch (exception) {
      console.log("Failed to parse line as JSON or process it correctly", exception);
    }
})
