var express = require('express');
var app = express();
var PORT = 9000;
var cors = require('cors');
var fs = require('fs');
var axios = require('axios');
var bodyParser = require('body-parser')

app.use(cor());

app.listen(PORT,() => console.log('Server is running...'))

app.use(bodyParser());
const base64_encode=(file)=>{
  var bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString('base64');
}

app.post('/images',(req,res)=>{
  const image = (require.body.image);
  axios.get()
})

app.get('/',(req,res) => {
  res.send('Hallo');
})

