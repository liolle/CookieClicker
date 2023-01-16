require('dotenv').config()
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')

// Connection URI 
// const uri = process.env.DATABASE_URL_REMOTE;

const uri = process.env.DATABASE_URL_LOCAL;

// Create a new MongoClient
const client = new MongoClient(uri);

let dbConnect 

const connectDb = ()=>{
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(uri)

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


