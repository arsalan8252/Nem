const express = require('express');
const cors = require('cors');

const port = process.env.port || 4000;

const app = express();

app.use(cors());

app.listen(port, (request, response)=>{
    console.log(`The server is runing on port ${port}`);
});


const MyRouter = require('./routes/MyRoute');
app.use('/path', MyRouter);