const express=require('express')
const app=express()

const cors=require('cors')
const mongoose=require('mongoose')

app.use(cors())

//database Connection Before Routing
let URL='mongodb+srv://rimonchowdhury444:rimonchowdhury444@cluster0.qd6bq.mongodb.net/MrX';
let OPTION={user:'rimonchowdhury444',pass:'rimonchowdhury444',autoIndex:true};

mongoose.connect(URL,OPTION).then((res)=>{
    console.log('MrX Database conneted successfully')
}).catch((err)=>{
    console.log(err)
})

let projectSchema= mongoose.Schema({
        projectName:{type:String,required:true},
        projectImage:{type:String,required:true},
        projectDescription:{type:String},
},{timestamps:true,versionKey:false})

let projectModel=mongoose.model('projects',projectSchema)

app.get('/api/getProjects',async(req,res)=>{
    try{
        let data= await projectModel.find()
        res.status(200).json({status:'success',data:data})
    }catch(e){
        res.status(400).json({status:'failed',err:toString(e)})
    }
})


module.exports=app