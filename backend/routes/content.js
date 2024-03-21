import express from 'express';
import { Content } from '../models/content.js';

const router = express.Router();


router.get("/" , async( req ,res) => {

    try {
        const fetchProduct = await Content.find({});
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

router.get("/:id", async( req , res) =>{

    try{
        const {id} = req.params;
        const getProducs = await Content.findById(id); 
        res.status(200).json(getProducs);
    }
    catch (err) {
        res.status(500).json(err.message)
    }
})


router.post('/' , async(req, res ) => {
    try{
        const product = await Content.create(req.body)
        if (product){
            console.log("Product created");
            res.status(201).send({status: "succes" , message: "Product created" ,product: product})
        }else{
            console.log("Product not created");
        }
       
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

router.put("/edit/:id", async(req, res) => {
    console.log("/edit/:id");
    try{
        const {id} = req.params
        // const {id} = req.params.id;
         const updatecontentData = req.body
        const prevContent = await Content.findByIdAndUpdate(id , updatecontentData);
        if(!prevContent){
            return res.status(404).json({message: `cannot find product by id ${id}`})
        }
        // Object.assign(prevContent, updatecontentData)
        // if(updatecontentData){
        //     prevContent = updatecontentData.map(item => ({...item}))
        // }
        const updateContent = await Content.findById(id)
        res.json(updateContent)
        //res.json(getProduct) to show what is changed 

    }
    catch(error){
        res.status(500).json({ message: error.message})
    }
})

router.delete("/delete/:id", async(req, res) => {
    console.log("/delete/:id");
    try{
        const {id} = req.params
        const getProduct = await Content.findByIdAndDelete(id);

        if(!getProduct){
            res.status(404).json({message: `cannot delete product by id ${id}`})
        }else{

            res.json(getProduct)
        }
    }
    catch(error){
        res.status(500).json({ message: error.message})
    }
})

export default router;