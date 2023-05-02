import mongoose from "mongoose";

const Connection = async (username,password) =>{
    // We have to use try catch block here beacuse "mongodb" IS An external element and it can give error while connecting so we have to try catch as we have used in our CHAT APP while connecting with firebase
    const URL = `mongodb+srv://${username}:${password}@crud-app.id6k5ki.mongodb.net/?retryWrites=true&w=majority`;
    try{
        // Inside mongoose there is a function "connect" which akes 2 arguments "URL" and "{}" 
        await mongoose.connect(URL,{ useUnifiedTopology : true , useNewUrlParser : true});
        console.log("DATABASE CONNECTED SUCCESSFULY")
    }
    catch(err)
    {
        console.log("ERROR WHILE CONNECTING WITH DATABASE",err);
    }
}
export default Connection;