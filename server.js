import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import brandRouter from "./router/brand.js";



dotenv.config();
const PORT = process.env.PORT || 6060;

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));


//routing
app.use("/brand", brandRouter);




app.listen(PORT, ()=>{
    console.log(`server is running in ${PORT}`);
    
});


