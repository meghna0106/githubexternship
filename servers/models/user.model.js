 const mongoose = require('mongoose')
 const User = new mongoose.Schema({
    name: {type: String,required:true},
    id:{ type: Number ,required :true,unique:true}
    

 },
 {collection : 'user-data'}
 
 )
  const model=mongoose.model('UserData',User)
  module.exports=model
