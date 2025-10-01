import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import brandRouter from "./router/brand.js";
import categoryRouter from "./router/category.js";



dotenv.config();
const PORT = process.env.PORT || 6060;

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));


//routing
app.use("/api/v1/brand", brandRouter);
app.use("/api/v1/category", categoryRouter);




app.listen(PORT, ()=>{
    console.log(`server is running in ${PORT}`);
    
});


