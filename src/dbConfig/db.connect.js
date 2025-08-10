import mongoose from "mongoose";

const connection = { isConnected: false };

export async function connectToDb()  {
    if(connection.isConnected) {
        console.log("Already connect to db")
        return
    }
    try {
        const connectDb = await mongoose.connect(process.env.MONGO_URI)
        connection.isConnected = connectDb.connections[0].readyState
        console.log('Db is connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    
}
