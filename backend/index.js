const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
//mongoDB connection
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Taste From Home Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  confirmPassword: String,
  image: String,
});

//
const userModel = mongoose.model("user", userSchema);

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//spi sign up
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  //new
  userModel
    .findOne({ email: email })
    .then(function (result) {
      if (result != null) {
        res.send({ message: "Email id is already registered!!", alert: false });
      } else {
        const data = userModel(req.body);
        const save = data.save();
        res.send({ message: "Sign Up Successful🥳", alert: true });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

// userModel.find({ email: email }).then(function (result) {
//   console.log(result);
//   // console.log(err);
//   if (result) {
//     res.send({ message: "Email id is already registered!!" });
//   } else {
//     const data = userModel(req.body);
//     const save = data.save();
//     res.send({ message: "Sign Up Successful🥳" });
//   }
// });

//api login
app.post("/login", (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  userModel
    .findOne({ email: email })
    .then(function (result) {
      if (result) {
        console.log(result);
        const dataSend = {
          _id: result._id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          image: result.image,
        };
        console.log(dataSend);
        res.send({
          message: "Login Successful",
          alert: true,
          data: dataSend,
        });
      } else {
        res.send({
          message: "Email ID not found. Please Register first!",
          alert: false,
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

//product section
const schemaProduct = mongoose.Schema({
  name: String,
  catagory: String,
  image: String,
  price: String,
  description: String,
  seller: String,
  quantity: String,
});
const productModel = mongoose.model("product", schemaProduct);

app.post("/uploadProduct", async (req, res) => {
  console.log(req.body);
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Upload Successful" });
});

app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

//server is running
app.listen(PORT, () => console.log("Server is Running at PORT : " + PORT));
