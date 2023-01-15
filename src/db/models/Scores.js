const mongoose = require('mongoose')

const { Schema } = mongoose;



const Multiplier = new Schema({
    symbol: {
        type: String,
        required:true
    },
    power: {
        type: Number,
        required:true
    }
})

const scoresSchema = new Schema({
    pseudoname: {
        type: String,
        required:true
    },
    score: {
        type:[Multiplier],
        required:true
    }
})

module.exports = mongoose.model("Score",scoresSchema)