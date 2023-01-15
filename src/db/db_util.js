require('dotenv').config()
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')

// Connection URI
const uri = process.env.DATABASE_URL;

// Create a new MongoClient
const client = new MongoClient(uri);

let dbConnect 

const connectDb = ()=>{
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.DATABASE_URL)
    } catch (error) {
        console.error(error)
    }
}
  
module.exports = {
    connectTodb: (run)=>{
        client.connect()
        .then((c)=>{
            dbConnect = c.db()
            run()
        })
        .catch((err)=>{
            console.log('err')
        })
    },
    /**
     * 
     * @returns {Db}
     */
    getDb: ()=>{
       return dbConnect
    },
    closeDb: ()=>client.close(),
    connectDb,
    

}


