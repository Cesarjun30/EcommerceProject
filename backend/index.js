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

// schema

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
        const data = userModel(req.body)
        const save = data.save()
        res.send({message: "Saved successfully"})
      }
    } catch (err) {
      console.log(err);
    }

    
  }

  findEmail();
  
});

app.listen(PORT, () => console.log("server esta ecuchando en port 8080"));
