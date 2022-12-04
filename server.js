const express=require("express");

const dotenv=require("dotenv");
dotenv.config();

require("./db/conn");
const app=express();

const PORT1=process.env.PORT;

app.use(express.json());

const product=require("./routes/productRoute")

app.use("/api/v1",product)

app.get("/",function(request,response){
    response.send("hello World");
})



app.listen(PORT1,()=>console.log(`App is started in ${PORT1}`))