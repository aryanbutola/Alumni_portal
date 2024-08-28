const dotenv=require('dotenv');
dotenv.config();

const MongoURI = process.env.MongoURI

const mongoose=require('mongoose');

const connectToMongo=()=>{
    mongoose.connect(MongoURI)
    
}


module.exports=connectToMongo