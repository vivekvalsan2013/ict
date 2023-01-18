
// Here the sample JSON file is working as sample database 
const express=require("express");
const app=new express(); //intrepreting the data as json file
app.use(express.json()); //any data taken from the browser should be in UTF-8 format
const data=require("./sampledatabase.json")
app.use(express.urlencoded({extended:true}))
const fs=require("fs");
const e = require("express");
// retreiving the data from 
app.get("/employee",(req,res)=>{
    
    res.send((data));
})
app.post("/employee",(req,res)=>{
    data.push(req.body) //pushing the the data recieved with the request to the database
    //writing the new changes to the db
    fs.writeFile(`sampledatabase.json`,JSON.stringify(data),(err,resp)=>{
        if(err){
        res.send("Data cannot be written")}
        else{
          res.send("Data written sucessfully")  
        }
    })})
//in put url parameter(the id of the data which need to be changed) is given along with URL , the data to be changed in the body side
app.put("/employee/:name",(req,res)=>{
    //accesing the URL parameter
   let name=req.params.name; 
   //checking the key is present in the database
   data.forEach((i)=>{
    if(i.ename==name){
        i.designation=req.body.designation;
        i.salary=req.body.salary;
    }
   })
//writing the changes to the DB    
   fs.writeFile(`sampledatabase.json`,JSON.stringify(data),(err,resp)=>{
        if(err){res.send("Data not updated")}
        else{res.send("Data updates")}
   })
})
app.delete("/employee/:name",(req,res)=>{
   let name=req.params.name;
   let remain=data.filter((item=>item.ename!=name))
   fs.writeFile(`sampledatabase.json`,JSON.stringify(remain),(err,resp)=>{
    if(err){res.send(`couldn't delete data`)}
    else{res.send(`deleted data`)}
   })
})
app.listen(4002,()=>{
    console.log("Server listening to port 4002")
})
