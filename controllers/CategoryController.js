import asyncHandler from "express-async-handler";
import prisma from "../config/client.js"

/**
 * get all brands
 * @method Get
 * @endpoint /api/v1/brand
 */

export const getAllCategory = asyncHandler(async(req,res)=>{

    //get all brand data from db
    const data = await prisma.category.findMany();
   
    //response
    res.status(200).json({"brands": data});
});



/**
 * get single Category
 * @method Get
 * @endpoint api/v1/Category/:id
 */

export const getSingleCategory = asyncHandler(async(req,res)=>{

    //get Category id
    const {id} = req.params; 

    //fet all Category from db
    const data = await prisma.category.findUnique({
        where: {id}
    });
   
    res.status(200).json({"brands": data});
});



/**
 * create single Category
 * @method Post
 * @endpoint api/v1/Category
 */

export const createCategory = asyncHandler(async(req,res)=>{


    const data = await prisma.category.create({
        data: {
            name : req.body.name,
            slug : req.body.slug,
            photo : req.body.path
        }
    });
   
    res.status(200).json({"brands": data});
});



/**
 * delete brand
 * @method delete
 * @endpoint api/v1/brand/:id
 */

export const deleteCategory = asyncHandler(async(req,res)=>{

    //get id
    const {id} = req.params;

    //get all brand data from db
    const data = await prisma.category.delete({
        where : {id}
    });
   
    //response
    res.status(200).json({data});
});




/**
 * update brand
 * @method update
 * @endpoint api/v1/brand/:id
 */

export const updateCategory = asyncHandler(async(req,res)=>{

    //get id
    const {id} = req.params;

    //get all brand data from db
    const data = await prisma.category.update({
        where : {id},
        data: req.body
    });
   
    //response
    res.status(200).json({data});
});