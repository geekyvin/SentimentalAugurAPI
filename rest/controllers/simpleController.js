// simple controller routes
var express = require('express');
var router = express.Router();
var augurService = require("../services/augurService");

// get /api/simple/
router.get('/',(req,res) => {
  res.send('GET response');
  augurService.
});

// post /api/simple/
router.post('/',(req,res) => {
  res.send('POST response');
});

// put /api/simple/
router.put('/',(req,res) => {
  res.send('PUT response');
});

// delete /api/simple/
router.delete('/',(req,res) => {
  res.send('DELETE response');
});

module.exports = router;