const express = require("express");
const cloudinary = require('cloudinary').v2;

const Product = require('../../../models/Product');

const router = express.Router();
// @route   GET api/admin/products/test
// @desc    Tests admin product route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Admin Products Works" }));

router.post('/', async(req, res)=>{
    let newProduct = {
        // productSubImages:[],hightlights:[],
    }
    let result = await Product.findOne({title: req.body.title});
    if(result){
        return res.json({msg:'This item exist already'});
    }else{
        newProduct.title=req.body.title? req.body.title:"";
        newProduct.productMainImage=req.body.productMainImage? req.body.productMainImage:"";
        newProduct.productSubImages=req.body.productSubImages? req.body.productSubImages:[];
        newProduct.discountedPrice=req.body.discountedPrice? req.body.discountedPrice:"";
        newProduct.originalPrice=req.body.originalPrice? req.body.originalPrice:"";
        newProduct.discount=req.body.discount? req.body.discount:"";
        newProduct.availablilityCount=req.body.availablilityCount? req.body.availablilityCount:"";
        newProduct.hightlights=req.body.hightlights? req.body.hightlights:[];
        newProduct.description=req.body.description? req.body.description:"";
        newProduct.packageContain=req.body.packageContain? req.body.packageContain:"";
        newProduct.BatteryCapacity=req.body.BatteryCapacity? req.body.BatteryCapacity:"";
        newProduct.Warrenty=req.body.Warrenty? req.body.Warrenty:"";

        await new Product(newProduct)
        .save();
        res.json({msg:'Successfully added a product'});
    }

})

router.post('/fileUpload',async (req, res)=>{
    var subImageArray = [];
        req.files.productSubImages.forEach((each, i)=>{
            cloudinary.uploader.upload(each.tempFilePath,async (err, result)=>{
                if(err)
                    res.json(err);
                subImageArray.push(result.secure_url);
                if(i === 0){
                    res.json(subImageArray);
                }

            });
        })
})

router.post('/fileUpload/singleFile',async (req, res)=>{
            cloudinary.uploader.upload(req.files.productMainImage.tempFilePath,async (err, result)=>{
                if(err)
                    res.json(err);
                res.json(result.secure_url);
            });
})



module.exports = router;
