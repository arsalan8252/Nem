const users = require("../Apis/Api");
const getController = (request, response) => {
  response.json(users);
};
const postController = (request, response) => {
  response.json({ message: "This is post controller" });
};
const putController = (request, response) => {
  response.json({ message: "This is put controller" });
};
const deleteController = (request, response) => {
  response.json({ message: "This is delete controller" });
};
module.exports = {getController,postController,putController,deleteController};