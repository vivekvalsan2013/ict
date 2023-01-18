const { urlencoded } = require("body-parser");
const express=require("express");
const app=new express();
const mongoose=require("mongoose");
const testdata = require("./model/testdata");
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// to connect the node js and express js with the database
// mongoose is the third party module which helps in connecting the mongodb witht the node js and express js
// the password should be changed and the database name should be added in bw /?
mongoose.connect("mongodb+srv://VivekValsan:Vivek1111@cluster0.767pfgl.mongodb.net/NorkaFSD2022?retryWrites=true&w=majority")

//to get data from the db
// since it's a asynchronous operation ,we are using aync and await
app.get("/data",async(req,res)=>{
    // grabbing the data from the database is done here and stored in data
    const testData=await testdata.find();
    res.send(testData)
})

// for post method
app.post("/data",(req,res)=>{
    // fetching the new data from the req for posting
    var item={
        name:req.body.name,
        location:req.body.location,
        designation:req.body.designation
    }
    //embedding the new data to the model
    var data=testdata(item)
    data.save();
})

app.listen(3004,()=>{
    console.log("Sever listening to port number 3000")
})