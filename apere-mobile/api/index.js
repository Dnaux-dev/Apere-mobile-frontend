const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express()
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose.connect("mongodb+srv://aperemb:dulcetcoder1@cluster0.wih8y.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});
 
// endpoint to register user in the app

const User = require("./models/user");
const Order = require("./models/order")

//function to send verification email to the user

const sendVerificationEmail = async (email, verificationToken) => {
    //create a nodemailer transport

    const transporter = nodemailer.createTransport({
        //configure the email service
        service: "gmail",
        auth: {
            user: "ajiloredaniel@gmail.com",
            pass: "mymothermy97"
        }
    })

    //compose the email message
    const mailOptions = {
         from: "apere.store",
         to: email,
         subject: "Email verification",
         text: "Please click the following link to verify your email: https://localhost:8000/verify/$(verificationToken)"
    };

    //send the email
    try{
        await transporter.sendMail(mailOptions)
    } catch(error) {
        console.log("Error sending email")
    }
}


app.post('/register', async(req, res) => {
    try{
        const{name, email, password} = req.body

        //check if the email is already regostered
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email already registered"});
        }

        // creating a new user\
        const newUser = new User({name, email, password});

        //generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(30). toString("hex");

        //save the user to the database
        await newUser.save()

        //send verification email to the user
        sendVerificationEmail(newUser.email,newUser.verificationToken);
    } catch(error){
        console.log("Error registering user", error)
        res.status(500).json({message: "Registration Failed"})
    }
});

//endpoint to verify the email address
app.get("verify/:token", async(req,res) => {
    try{
        const token = req.params.token;

        //find the user with the given verification token
        const user = await User.findOne({verificationToken: token});
        if(!user){
            return res.status(404).json({message: "Invalid verification token"})
        }

        //mak the user as verified
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({message: "Email verified successfully"})
    } catch (error) {
        res.status(500).json({message: "Email verification Failed"});
    }
})