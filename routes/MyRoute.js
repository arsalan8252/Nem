const express = require("express");

const Router = express.Router();

const { 
    GetController, PostController, DeleteController, PutController
    } = require("../controllers/MyController");

Router.get("/get", GetController);

Router.post('/post', PostController);

Router.delete('/delete', DeleteController);

Router.put('/put', PutController);

module.exports = Router;
