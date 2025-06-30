import mongoose from "mongoose";

export async function connectToDb() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on('connected', ()=>{
        console.log('Mongo db connect');
        
    });
    connection.on("error", (err)=>{
        console.log("mongo db connection error" + err);
        process.exit();
    })
  } catch (error) {
    console.log("Something wen wrong connecting to DB");
    console.log(error);
  }
}

 
