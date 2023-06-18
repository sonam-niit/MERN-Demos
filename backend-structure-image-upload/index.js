const express= require('express');

const path= require('path');
const app= express();

const multer= require('multer');

const storage= multer.diskStorage({
    destination:'./images',
    filename: (req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`)
    }
})
//initialize multer
const upload= multer({
    storage:storage,
    limits:{fileSize:100000},//1MB
    fileFilter:(req,file,cb)=>{
        checkFileType(file,cb);
    }
})

app.post("/imageupload",upload.single("image"),(req,res)=>{
    if(req.file){
        res.send("Image uploaded successfully")
    }else{
        res.status(400).send("PLEASE UPLOAD VALID IMAGE")
    }
})
app.listen(5000,()=>{
    console.log("Satrted")
})
const checkFileType= (file,cb)=>{
    const fileTypes= /jpeg|jpg|png/;
     const extName=fileTypes.test(path.extname(file.originalname).toLowerCase());
     const mimetype= fileTypes.test(file.mimetype);

     if(extName && mimetype){
        return cb(null,true)
     }else{
        cb("ERROR..  Ypu can only upload JPEG, JPG & PNG ")
     }
        
}