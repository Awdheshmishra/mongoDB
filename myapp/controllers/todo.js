import Todo from "../models/todo.js";
export const create = async(req,res)=>{
    try{
        const {title,completed} = req.body;
        const todo = await Todo.create({
            title,
            completed,
            user:req.user.userId
        })

        res.json({message:"todo created",todo})

    }catch(error){
        res.json({
            errors:error.message
        })
    }

}