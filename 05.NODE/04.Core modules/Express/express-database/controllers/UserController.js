const model = require("../modules/user.js");

const CreateUser = (req, res) => {
  new User(req.body)
    .save()
    .then((user) =>
      res.status(201).json({ message: "the is created sucessfully" }),
    )
    .catch((err) => {
      console.log(err.message);
    });
};

const getFUll = (req, res) => {
  User.find()
    .save()
    .then((user) =>
      res.status(201).json({ message: "the data updated", data: true }),
    )
    .catch((err)=>
    {
        console.log(err.message);
        
    })
};

module.exports={
    CreateUser,
    getFUll
}
