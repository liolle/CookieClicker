const mongoose = require('mongoose')

const { Schema } = mongoose;


const bonus = new Schema({
    
    bonusName:{
        type:String,
        required : true
    },
    amount:{
        type: Number,
        required:true
    }
})

const inventorySchema = new Schema({
    pseudoname: {
        type: String,
        required:true
    },
    bonus:{
        type:[bonus],
        required: true
    } 
})

module.exports = mongoose.model("Inventorys",inventorySchema)