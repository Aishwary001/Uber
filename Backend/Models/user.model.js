const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname : {
        firstname : {
            type : String,
            required : true,
            minlength : [3,'first name must be atleast 3 characters']
        },
        lastname : {
            type : String,
            minlength : [3,'last name must be atleast 3 characters']
        }
    },
    email : {
        type : String,
        required : true,
        unique : true,
        match : [/\S+@\S+\.\S+/,'email must be in valid format']
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    socketId : {
        type : String,
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({id : this.id} , process.env.JWT_SECRET, {expiresIn : '24h'});
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password,this.password);
} 

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;