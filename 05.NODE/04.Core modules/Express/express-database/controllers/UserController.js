const User = require("../modules/user.js");
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
    .catch((err) => {
      console.log(err.message);
    });
};

const getSpc = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => res.status(200).json({ success: "true ", data: user }))

    .catch((err) => console.log(err.message));
};

const UpdateONE = (req, res) => {
  const { id } = req.params;
  const newOne = req.body;

  User.findByIdAndUpdate(id, {
    name: newOne.name,
    age: newOne.age,
    city: newOne.city,
  })
    .then((Updateuser) =>
      res
        .status(200)
        .json({ success: "user data updated sucessfully", data: User }),
    )
    .catch((err) => console.log(err.message));
};

const RemoveOne = (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id).then((deletedUSer) =>
    res
      .status(200)
      .json({ message: "your data deleted Successully", data: deletedUSer }),
  )
  .catch((err)=>console.log(err.message)
  );
};

module.exports = {
  CreateUser,
  getFUll,
  getSpc,
  UpdateONE,
  RemoveOne
};
