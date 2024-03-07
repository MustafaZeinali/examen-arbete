import express from 'express';
import { Product } from '../models/post.js';

const router = express.Router();


router.get("/product" , async( req ,res) => {

    try {
        const fetchProduct = await Product.find({});
        if (fetchProduct < 0) {
            res.status(404).json("it is empty");
        }else{
            res.send(fetchProduct);
        }
        
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message)
    }
})

router.post('/post' , async(req, res ) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

export default router;