const userModel = require('../models/user.model');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const userModel = require('../models/user.model');n


module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || (req.headers.Authorization && req.headers.Authorization?.split(' ')[1]);
        console.log(token);

        if (!token) {
            console.log("No token provided");
            return res.status(401).json({ message: "Unauthorized" });
        }

        const isBlackListed = await userModel.findOne({ token });

        if (isBlackListed) {
            console.log("Token is blacklisted");
            return res.status(403).json({ message: "Token is blacklisted" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        // if (!decoded._id) {
        //     console.log("Invalid token payload ho raha hai");
        //     return res.status(401).json({ message: "Invalid token payload" });
        // }

        const user = await userModel.findById(decoded.id);
        
        if (!user) {
            console.log("User not found in DB");
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;  // Attach user to request
        console.log("User attached to request:", user);

        next();
    } catch (err) {
        console.log("Error in authUser middleware:", err.message);
        return res.status(401).json({ message: "Unauthorized", error: err.message });
    }
};
