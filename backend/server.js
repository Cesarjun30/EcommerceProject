const express = require('express');
const app = express();
const port = 8080;
// const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const CreateUser = require('./createUser.js');
//const Products = require('./products');


app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

// conexion a mongodb 
mongoose.connect("mongodb+srv://enmanuely97:ohhMNMCWR073nPj0@cluster0.ssdpyqb.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("Db connected")).catch(err => console.log(err.message));



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
// app.use("/createuser", CreateUser);
// app.use("/products", Products);

app.get("/", (req,res) => {
    res.send("Conectado");
});

app.post("/signup", (req, res) => {
    console.log(req.body);
    // const { email } = req.body;
});

module.exports = app;

