const express= require('express');
const { getUsers, AddUser, getById, updateById, deleteById } = require('../controller/user_controller');

const router= express.Router();

router.route("/").get(getUsers).post(AddUser)

router.route("/:id").get(getById).delete(deleteById).put(updateById)

module.exports=router