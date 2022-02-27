const express = require("express");
const Router = express.Router();
const {
  getController,
  postController,
  putController,
  deleteController
} = require("../controllers/controller");
Router.get("/get", getController);
Router.post("/post", postController);
Router.put("/put", putController);
Router.delete("/delete", deleteController);
module.exports = Router;
