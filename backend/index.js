const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// MongoDB conexion
console.log(process.env.MONGODB_URL);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Data Base"))
  .catch((error) => console.log(error));

  // MongoDB conexion

// schema for user 

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmpassword: String,
  image: String,
});

// model

const userModel = mongoose.model("users", userSchema);

// API
app.get("/", (req, res) => {
  res.send("Va corriendo");
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  async function findEmail() {
    try {
      const result = await userModel.findOne({ email: email });
      console.log(result);

      if (result) {
        res.send({ message: "Email is already registered" });
      } else {
        const data = userModel(req.body);
        const save = data.save();
        res.send({ message: "Saved successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  findEmail();
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  async function findSingupEmail() {
    try {
      const result = await userModel.findOne({ email: email });

      if (result) {
        const dataSend = {
          _id: result._id,
          firstname: result.firstname,
          lastname: result.lastname,
          email: result.email,
          image: result.image,
        };
        console.log(dataSend);

        res.send({
          message: "You logged in successfully",
          alert: true,
          data: dataSend,
        });
      } else {
        res.send({
          message: "Email or Password or both are not correct",
          alert: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  findSingupEmail();

  /*userModel.findOne({email: email},(err,result) =>{
    if (result){console.log(result)

       res.send({message: "You logged in successfully", alert: true,})
    }

  })*/
});

// AQUI TERMINA LA SECCION DE INICIO DE SECCION 

// AQUI EMPIENZA LA SECCION PRODUCTOS

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price : String,
  description: String
});

// model

const productsModel = mongoose.model("products ", productSchema);

// AQUI GUARDAMOS LOS PRODUCTOS

//API 

app.post("/uploadProducts", async(req, res) => {
  console.log(req.body)
  const data = await productsModel(req.body)
  const datasave = await data.save()

res.send({message : "Product Uploaded 🤩"})

})

// 

app.get("/product", async(req, res) =>{
  const data = await productsModel.find({})
  res.send (JSON.stringify(data))
})


app.listen(PORT, () => console.log("server esta ecuchando en port 8080"));
