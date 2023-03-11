const mongoose = require("mongoose");

const unserSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true, "Please add the user name"],
    },
    email : {
        type : String,
        required : [true, "Please add the user email address"],
        unique : [true, "Email address alerady taken"],
    },
    password : {
        type : String,
        required : [true, "Please add the user password"],
    },
}, {
    timestamps : true,
});

module.exports = mongoose.model("User", unserSchema);