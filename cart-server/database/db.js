import mongoose from "mongoose";

const Connection = async ()=>{

   const url = `mongodb+srv://Munu1234:UiFOtllXepY93Plu@cluster0.g2vdz2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(url);
        console.log("database connected")

    }
    catch(error){
        console.log(`error while connection to database` , error.message)
    }
}

export default Connection;