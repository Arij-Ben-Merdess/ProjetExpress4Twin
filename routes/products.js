const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const validate = require('../middle/validate')

router.get('/show',(req,res)=>{res.send('salut projet express !')})


    router.post("/add",validate.validateProduct,productController.add);
//get
router.get("/showproducts",productController.showproducts);

//get By Id
router.get("/showbyid/:id",productController.showbyid);

router.get("/showbyname/:name",productController.showbyname);

router.get("/showbynames/:name",productController.showbynames);

//Update 
router.put("/update/:id",productController.update);

//Delete 
router.delete("/delete/:id",productController.deleteProducts);

module.exports=router;