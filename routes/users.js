const express = require('express')
const router = express.Router()
router.use(express.json()); // Ensure you're using body-parser correctly
const userController = require('../controller/userController')
const validate = require('../middle/validate')


router.get('/show',(req,res)=>{res.send('salut projet express !')})
//add
router.get("/addUser/:username/:email/:cin",)


    router.post("/add",validate.validate,userController.add);
//get
router.get("/showusers",userController.showusers);

//get By Id
router.get("/showbyid/:id",userController.showbyid);

router.get("/showbyusername/:username",userController.showbyusername);

router.get("/showbyusernames/:username",userController.showbyusernames);

//Update 
router.put("/update/:id",userController.update);

//Delete 
router.delete("/delete/:id",userController.deleteUsers);

router.get("/chat",(req,res)=>{res.render("chat")});


module.exports=router;