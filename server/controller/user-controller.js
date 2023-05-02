// request m woh paas hota h jo API se data aa rha h aur response m humlog backend pr data bhejte h
import User from "../schema/user-schema.js"

export const addUser = async (request,response) =>{
    const user = request.body;
    const newUser = new User(user);
    // console.log(newUser);

    // response humesha backend se aati h
    // toh agar successfully validate ho jata h toh save() function call hoga jo ki successfully data ko store krdega database pr . STATUS-201
    try{
        await newUser.save();
         response.status(201).json(newUser);
    }
    catch(error)
    {
        response.status(409).json({message : error.message})
    }
}

export const getUser = async(request,response) =>{
    try{
       const data =  await User.find({});
        response.status(201).json(data);
    }
    catch(error){
        response.status(404).json({message : error.message})
    }
}

export const getSingleUser = async (request,response) =>{
    console.log(request.params.id);
    try{
        const data = await User.findOne({_id: request.params.id});
        response.status(201).json(data);
    }
    catch(error){
        response.status(404).json({message : error.message})
    }
}
export const editUser = async (request,response) =>{
    let user = request.body;
    const editUser = new User(user);

    try{
        await User.updateOne({_id : request.params.id},editUser);
        response.status(201).json(editUser);
    }
    catch(error){
        response.status(404).json({message : error.message});
    }
}
export const deleteUser = async (request,response) =>{
    // const user = request.body;
    // const newUser = new User(user);
    try{
    const data = await User.deleteOne({_id:request.params.id});
    response.status(201).json(data);
   }
   catch(error)
   {
    response.status(404).json({message : error.message});
   }
}