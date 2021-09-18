var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers') 

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"iphone 11",
      category:"mobile",
      description:"this is a phone",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144763"
    },
    {
      name:"iphone 11",
      category:"mobile",
      description:"this is a phone",
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144763"
    },
    {
      name:"iphone 11",
      category:"mobile",
      description:"this is a phone",
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000"
    },
    {
      name:"iphone 11",
      category:"mobile",
      description:"this is a phone",
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000"
    },
  ]
  
  
  res.render('admin/view-products',{admin:true,products});
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
console.log(req.body);
console.log(req.files.Image);
productHelper.addProduct(req.body,(result)=>{
  res.render("admin/add-product")
})
})
module.exports = router;
