const express = require('express');
const app = express();
const port = 3000;
// const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CreateUser = require('./createUser');
//const Products = require('./products');


app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

mongoose.connect("mongodb+srv://enmanuely97:ohhMNMCWR073nPj0@cluster0.ssdpyqb.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("Db connected")).catch(err => console.log(err.message));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/createuser", CreateUser);
//app.use("/products", Products);



module.exports = app;

