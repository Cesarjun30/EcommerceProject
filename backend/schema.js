// aqui se crea la conexion a la base de datos con mongoose
// var express = require('express');
const mongoose = require("mongoose");



// user schema

const userSchema = new mongoose.Schema({
     firstname: String,
     lastName: String,
     email: {
        type: String,
        unique: true,
     },
     password: String,
     confirmPassword: String,
     image: String,
});


// product schema

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: Buffer
    //   {  data: Buffer,
    //     contentType: String,
    // }
});



module.exports = mongoose.model('UserSchema', userSchema);
module.exports = mongoose.model('ProductSchema', productSchema);