const mongoose = require('mongoose')

const { Schema } = mongoose;

const bonusSchema = new Schema({
    bonusName:{
        type:String,
        required:true
    },
    cost: {
        type: Number,
        required:true
    },
    duration: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:false
    }
})

module.exports = mongoose.model("Bonus",bonusSchema)