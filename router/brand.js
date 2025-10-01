import express from "express";
import { createBrand, deleteBrand, getAllBrands, getSingleBrand, updateBrand } from "../controllers/BrandController.js";
import { brandMulter } from "../middlewares/MulterMiddleware.js";



//init router
const router = express.Router();

//endpoints
router.get("/", getAllBrands);
router.get("/:id", getSingleBrand);
router.post("/",brandMulter, createBrand);
router.delete("/:id", deleteBrand);
router.patch("/:id", updateBrand);


//export default
export default router;