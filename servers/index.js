const express=require('express')
const mongoose=require('mongoose')
// const res = require('express/lib/response')
const app=express()
const cors=require('cors')
const User=require('./models/user.model')
const jwt=require('jsonwebtoken')
const { resetWatchers } = require('nodemon/lib/monitor/watch')
app.use(cors())//middleware
 app.use(express.json())
 const path=require('path')

 mongoose.connect('mongodb://localhost:27017/gitextern')

app.post('/api/register',async (req,res)=>{
    console.log(req.body)
    try{
        const user=await User.create(
            {name: req.body.name,
            id: req.body.id,
            
                    
            })
        res.json({status:'ok'})
    }
    catch(err){
             res.json({status:'error',error:'duplicate email'})
    }
   
}) 

app.post('/api/login',async (req,res)=>{
    
    
        const user =await User.findOne({email:req.body.name ,id:req.body.id})
        res.json({status:'ok'})
    if(user){
            const token=jwt.sign(
                {
                    id:req.body.id,
                    name:req.body.name

                },'secret123')

        return res.json({status:'ok',user:token})
    }else{
        return res.json({status:'error',user:false})
    }
   
}) 

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'client','build','App.js'));

    }
    );

}

app.listen(1338,()=>{
    console.log('server started on port 1337')
})

 