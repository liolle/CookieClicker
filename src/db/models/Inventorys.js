const mongoose = require('mongoose')

const { Schema } = mongoose;

const inventorySchema = new Schema({
    pseudoname: {
        type: mongoose.ObjectId,
        required:true
    },
    bonusName: {
        type: mongoose.ObjectId,
        required:true
    },
})

module.exports = mongoose.model("Inventory",inventorySchema)