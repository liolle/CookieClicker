const mongoose = require('mongoose')

const { Schema } = mongoose;



const Multiplier = new Schema({
    multiplier: {
        type: String,
        required:true
    },
    base: {
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

module.exports = mongoose.model("Scores",scoresSchema)