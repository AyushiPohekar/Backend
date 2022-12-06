const express=require("express");
const errorMiddleware=require("./middleware/error")
const product=require("./routes/productRoute")

const dotenv=require("dotenv");
dotenv.config();

require("./db/conn");
const app=express();

const PORT1=process.env.PORT;

app.use(express.json());



app.use("/api/v1",product)

app.use(errorMiddleware);

app.get("/",function(request,response){
    response.send("hello World");
})

const server=app.listen(PORT1,()=>console.log(`App is started in ${PORT1}`))

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });






