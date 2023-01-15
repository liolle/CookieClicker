const mongoose = require('mongoose')

const { Schema } = mongoose;

const multipliersSchema = new Schema({
    symbol: {
        type: String,
        required:true
    },
    power: {
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("Multiplier",multipliersSchema)