const { urlencoded } = require("express");
const express=require("express");
const app=new express();

// get,post,put & delete is together CRUD
// app.get("/",(req,res)=>{
//     res.send("Welcome to the server")
// })

// app.listen(2001,()=>[
//     console.log("Server is listening to port number:2001")
// ])

// _______________________________________________________________

// to get data from the API
// app.get("https://reqres.in/api/users",(req,res)=>{
//     res.send(data);
// })

// app.listen(2009)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// post method

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.post("/login",(req,res)=>{
//     console.log(req.body);
//     res.send(`The data posted is ${JSON.stringify(req.body)}`)
// })

// app.listen(3002)

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/login",(req,res)=>{
    res.send("Welcome to the server")
})
app.post("/login",(req,res)=>{
    console.log(req.body)
    res.send(`The data posted is ${JSON.stringify(req.body)}`)
})

app.put("/login/:id",(req,res)=>{
    let id=req.params.id;
    res.send(`Updated data is ${JSON.stringify(req.body)}`)
})
app.delete("/login/:id",(req,res)=>{
    let id=req.params.id;
    res.send(`Deleting the data in ID number ${id}`)
})
app.listen(4001,()=>{
    console.log("You have redirected to port number 4001")
})