const express = require('express');
const cors = require('cors');
const http = require('http');

const port = 4000;

const app = express();

app.use(cors());

app.listen(port, (request, response)=>{
    console.log(`The server is runing on port ${port}`);
});
