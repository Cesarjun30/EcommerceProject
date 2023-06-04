var express = require('express');
const direc = express.Router();
const mongoose = require('mongoose');
// const UserSchema = require('./schema');
// const User = mongoose.model("User", UserSchema);

// hacer el post
// hacer funcion create user
fetch('http://localhost:3000/createuser', {
    method: 'POST',
    body: JSON.stringify(data)
})
function CreateUser(req, res){
    // User({
    //     firstname: "",
    //     lastName: "",
    //     email: "",
    //     password: "",

    // }).save().then((User)=>console.log(User)).catch((err)=>console.log(err))
    console.log(req.params.num1)
   res.send({message: "usuario creado"});
    console.log("usuario creado");
}

direc.post('/:user', CreateUser);
// aquí se guarda 
module.exports = direc;
