import Data from '../model/products-scheme.js';


export const DataOrder = async(req , res)=>{
    try{
        await  Data.insertMany(req.body);
        res.status(200).json("Order Placed Successfully");

    }catch(error){
        console.log("error while inserting data" , error.message);
    }

}