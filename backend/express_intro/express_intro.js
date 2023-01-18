// Install like a third party module from the npm
const express=require("express");
var app=new express();
app.get("/",(req,res)=>{
    res.send("You have entered the server")
})
app.listen(2000);
