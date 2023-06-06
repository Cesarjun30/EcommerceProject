var express = require('express');
// const direc1 = express.Router();
const mongoose = require('mongoose');
const userSchema = require('./schema');
const userModel = mongoose.model("User", userSchema);


function createUSer(req, res){
    app.post("/signup", async (req, res) => {
        console.log(req.body);
        const { email } = req.body;

        userModel.findOne({ email: email }, (err, result) => {
            console.log(err);
            if(result) {
                res.send({ message: "Correo ya registrado", alerte: false});
                } else {
                    const data = userModel(req.body);
                    const save = data.save();
                    res.send({ message: "Succesfully sign up", alert: true });
                }
        });
    });
};

// direc1.get("/:email", createUSer);

export default createUSer;
