const auth = (req,res,nest)=>{
    if(req.headers.authorization===process.env.SECRET_KEY){
        nest()
    }else{
        res.status(401).json({error:"not allowed"})
    }
}

export default auth;