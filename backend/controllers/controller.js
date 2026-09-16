export const hello = (req, res) =>{
    // console.log("Welcome to my vlog")
    res.status(200).json({message:"Welcome"})
}

export const send = (req,res)=>{
    res.status(200).json({message:"posting"})
}