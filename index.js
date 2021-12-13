const express = require('express');

const app = express();

app.use(() => {
  console.log('test server');   
})

app.listen(4000);