
const getUsers= (req,res)=>{
    res.status(200).json({message: "Get All Users"})
}

const AddUser= (req,res)=>{
    res.status(201).json({message: "User Added Successfully"})
}
const getById= (req,res)=>{
    res.status(200).json({message: `User Found with ${req.params.id}`})
}
const deleteById= (req,res)=>{
    res.status(200).json({message: `User Deleted with ${req.params.id}`})
}
const updateById= (req,res)=>{
    res.status(201).json({message: `User updated with ${req.params.id}`})
}

module.exports={getUsers,AddUser,getById,deleteById,updateById}