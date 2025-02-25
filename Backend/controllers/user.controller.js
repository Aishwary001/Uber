const userModel = require('../models/user.model');
const { validationResult, ExpressValidator } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');
const userService = require('../services/user.service');
module.exports.registerUser = async (req, res, next) => {
    console.log(req.body);
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //     // console.log(errors);
    //     return res.status(400).json({ errors: errors.array() });
    // }

    const { fullname, email, password } = req.body;

    if (!fullname || !fullname.firstname || !fullname.lastname) {
        return res.status(400).json({ message: "Full name is required" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,  // Ensure it matches the expected field in createUser
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.cookie('token', token);

    return res.status(201).json({ token, user });
};

module.exports.loginUser = async (req,res,next) => {
    console.log(req.body);
    // const error = validationResult(req);

    // if(!error.isEmpty()){
    //     return res.status(400).json({error : error.array()});
    // }

    const { email , password } = req.body;
    
    const user = await userModel.findOne({ email }).select('+password');

    console.log(user);

    if(!user){
        return res.status(401).json({message : 'Invalid email or password'});
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message : 'Invalid password'});
    }

    const token = user.generateAuthToken();
    res.cookie('token',token);

    return res.status(200).json({user,token});
}
module.exports.getUserProfile = async (req, res) => {
    console.log("Inside getUserProfile");
    console.log("req.user:", req.user);

    if (!req.user) {
        console.log("User is null in request");
        return res.status(401).json({ message: "User not logged in" });
    }

    return res.status(200).json({ message: "User logged in", user: req.user });
};


module.exports.logoutUser = async ( req, res) => {
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        console.log("No taken provided");
        return res.status(401).json({ message : unauthorized});
    }
       
    await blackListTokenModel.create({ token });

    res.status(200).json({message : 'Logged out' });
}