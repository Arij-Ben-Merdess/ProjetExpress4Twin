const Product = require('../models/product')

async function add (req,res) {
    try{
     console.log(req.body)
     const product = new Product({...req.body})
    await product.save();
     res.status(200).json(product);
         }catch(err){
             console.log(err)
         }
}

/*async function addProdutc(req,res){
    new User({
        username: req.params.username,
        email: req.params.email,
        cin: req.params.cin,
    }).save();
        res.send('good added')}
*/
async function showproducts  (req,res){
    try{
     console.log(req.body)
     const product = await Product.find();
     
     res.status(200).json(product);
         }catch(err){
             console.log(err)
         }
}

async function showbyid (req,res){
    try{
     console.log(req.body)
     const product = await Product.findById(req.params.id);
     
     res.status(200).json(product);
         }catch(err){
             console.log(err)
         }
}

async function showbyname(req,res){
    try{
     console.log(req.body)
     const product = await Product.findOne( {name : req.params.name});
     
     res.status(200).json(user);
         }catch(err){
             console.log(err)
         }
}

async function showbynames(req,res){
    try{
     console.log(req.body)
     const product = await Product.find( {name : req.params.name});
     
     res.status(200).json(product);
         }catch(err){
             console.log(err)
         }
}

async function update(req,res){
    try{
     console.log(req.body)
     const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new: true});
     
     res.status(200).json(product);
         }catch(err){
             console.log(err)
         }
}

async function deleteProducts(req,res){
    try{
     console.log(req.body)
    await Product.findByIdAndDelete(req.params.id);
     
     res.status(200).json('product deleted');
         }catch(err){
             console.log(err)
         }
}
module.exports = {
    add,
    showproducts,
    showbyid,
    showbyname,
    showbynames,
    update,
    deleteProducts,
};


