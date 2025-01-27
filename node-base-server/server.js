const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
require('dotenv').config()
const app = express();

const routes = require('./src/routes');

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/', routes);  


//const options = {
  //key: fs.readFileSync(path.join(__dirname, 'ssl/key.pem')),
  //cert: fs.readFileSync(path.join(__dirname, 'ssl/cert.pem')),
//};
// Create an HTTPS server with the Express app
//https.createServer(options, app).listen(process.env.PORT_NUMBER, () => {
  //console.log('HTTPS Express server running at https://localhost:3000');
//});
// Make 'uploads' folder publicly accessible
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads'))); 
app.listen(process.env.PORT_NUMBER, () => {
  console.log('Server running on port http://localhost:3001');
});
