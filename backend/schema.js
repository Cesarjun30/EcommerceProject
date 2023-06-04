// aqui se crea la conexion a la base de datos con mongoose
// var express = require('express');
const mongoose = require("mongoose");



// user schema

const UserSchema = new mongoose.Schema({
     firstname: String,
     lastName: String,
     email: String,
     password: String,

});

// product schema

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: Buffer
    //   {  data: Buffer,
    //     contentType: String,
    // }
});

// const UserModel = mongoose.model("User", userSchema);
// const ProductModel = mongoose.model("Product", productSchema);


module.exports = mongoose.model('UserSchema', UserSchema);
module.exports = mongoose.model('ProductSchema', ProductSchema);