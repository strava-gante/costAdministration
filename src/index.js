'use strict';
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser());

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
