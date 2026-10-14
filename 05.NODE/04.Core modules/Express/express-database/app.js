const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");
dotenv.config();
const USerroutes=require("./routes/UserRouter.js")


const PORT=process.env.PORT;
const CONNECTION_URL=process.env.CONNECTION_URL;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users",USerroutes)

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome....." });
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT} successfully`);
    });
  })
  .catch((err) => console.log(err));