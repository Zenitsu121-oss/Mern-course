const express=require("express");

const {CreateUser,getFUll,getSpc,UpdateONE, RemoveOne}=require("../controllers/UserController.js");

const UserRoute=express.Router();


//post
UserRoute.post("/create",CreateUser);

//get
UserRoute.get("/all",getFUll);

//getId
UserRoute.get("/id",getSpc)

//put 
UserRoute.put("/id",UpdateONE)

//Delete
UserRoute.delete("/id",RemoveOne)


module.exports=UserRoute;