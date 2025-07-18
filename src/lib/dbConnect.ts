import mongoose from "mongoose";

type dbConnectObject={
    isConnected?:number
}

const connection:dbConnectObject={};

async function dbConnect():Promise<void>{

    if(connection.isConnected){
        console.log("Already connected to the database");
        return;
    }

    try {

    const db = await mongoose.connect(process.env.MONGODB_URI as string|| '', {});

    connection.isConnected = db.connections[0].readyState;
    // console.log(db)

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);

    
    process.exit(1);
  }
}

export default dbConnect;

