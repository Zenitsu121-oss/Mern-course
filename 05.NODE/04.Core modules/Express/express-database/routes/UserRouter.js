const express=require("express");

const {CreateUser,getFUll}=require("../controllers/UserController.js");

const UserRoute=express.Router();


//post
UserRoute.post("/create",CreateUser);

//get
UserRoute.get("/all",getFUll);

module.exports=UserRoute;