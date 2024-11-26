const User = require('../models/user')

async function add (req,res) {
    try{
     console.log(req.body)
     const user = new User({...req.body})
    await user.save();
     res.status(200).json(user);
         }catch(err){
             console.log(err)
         }
}

async function addUser(req,res){
    new User({
        username: req.params.username,
        email: req.params.email,
        cin: req.params.cin,
    }).save();
        res.send('good added')}

async function showusers  (req,res){
    try{
     console.log(req.body)
     const user = await User.find();
     
     res.status(200).json(user);
         }catch(err){
             console.log(err)
         }
}

async function showbyid (req,res){
    try{
     console.log(req.body)
     const user = await User.findById(req.params.id);
     
     res.status(200).json(user);
         }catch(err){
             console.log(err)
         }
}

async function showbyusername(req,res){
    try{
     console.log(req.body)
     const user = await User.findOne( {username : req.params.username});
     
     res.status(200).json(user);
         }catch(err){
             console.log(err)
         }
}

async function showbyusernames(req,res){
    try{
     console.log(req.body)
     const user = await User.find( {username : req.params.username});
     
     res.status(200).json(user);
         }catch(err){
             console.log(err)
         }
}

async function update(req,res){
    try{
     console.log(req.body)
     const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true});
     
     res.status(200).json(user);
         }catch(err){
             console.log(err)
         }
}

async function deleteUsers(req,res){
    try{
     console.log(req.body)
    await User.findByIdAndDelete(req.params.id);
     
     res.status(200).json('user deleted');
         }catch(err){
             console.log(err)
         }
}
module.exports = {
    add,
    addUser,
    showusers,
    showbyid,
    showbyusername,
    showbyusernames,
    update,
    deleteUsers,
};


