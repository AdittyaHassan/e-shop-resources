import express from "express";
import { createCategory, getAllCategory, getSingleCategory } from "../controllers/CategoryController.js";
import { categoryMulter } from "../middlewares/MulterMiddleware.js";



//init router
const router = express.Router();

//endpoints
router.get("/", getAllCategory);
router.get("/:id", getSingleCategory);
router.post("/", categoryMulter, createCategory);


//export default
export default router;