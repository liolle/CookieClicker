const mongoose = require('mongoose')

const { Schema } = mongoose;

const usersSchema = new Schema({
    pseudoname: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    token: {
        type:String
    }
})

module.exports = mongoose.model("User",usersSchema)