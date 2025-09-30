import asyncHandler from "express-async-handler";
import prisma from "../config/client.js"

/**
 * get all brands
 * @method Get
 * @endpoint /brand
 */

export const getAllBrands = asyncHandler(async(req,res)=>{


    const data = await prisma.brand.findMany();
   
    res.status(200).json({"brands": data});
});



/**
 * get single brand
 * @method Get
 * @endpoint /brand/:id
 */

export const getSingleBrand = asyncHandler(async(req,res)=>{

//get brand id
const {id} = req.params; 
    const data = await prisma.brand.findUnique({
        where: {id}
    });
   
    res.status(200).json({"brands": data});
});



/**
 * get single brand
 * @method Get
 * @endpoint /brand/:id
 */

export const createBrand = asyncHandler(async(req,res)=>{


    const data = await prisma.brand.create({
        data: req.body
    });
   
    res.status(200).json({"brands": data});
});



/**
 * delete brand
 * @method delete
 * @endpoint /brand/:id
 */

export const deleteBrand = asyncHandler(async(req,res)=>{


    const {id} = req.params;

    const data = await prisma.brand.delete({
        where : {id}
    });
   
    res.status(200).json({"brands": data});
});




/**
 * update brand
 * @method update
 * @endpoint /brand/:id
 */

export const updateBrand = asyncHandler(async(req,res)=>{


    const {id} = req.params;

    const data = await prisma.brand.update({
        where : {id},
        data: req.body
    });
   
    res.status(200).json({"brands": data});
});