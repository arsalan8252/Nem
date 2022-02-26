const users = require('../Apis/Api');


const GetController  = (request, response) => {
    response.json(users)
};
const PostController  = (request, response) => {
    response.json({
        message : 'This is Post controller'
    })
};
const DeleteController  = (request, response) => {
    response.json({
        message : 'This is Delete controller'
    })
};
const PutController  = (request, response) => {
    response.json({
        message : 'This is Put controller'
    })
};

module.exports = {GetController, PostController, DeleteController, PutController};