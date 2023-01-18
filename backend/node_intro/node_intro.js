
// process can be used to- get details regarding the cwd, version etc.
// console.log(`Current Platform is ${process.version}`);

// local module export
// var file=require("./node_intro2")
// file.print("vivek");

// to install from third party module(npm)
// find the module in npm, install it, assign it to a variable using require and call the variable

// var chalk=require("chalk");
// console.log(chalk.red("Hello world"));

// var colors=require("colors")

// console.log("hello".green);
// var y="Hello how are ypu".magenta;
// // console.log(y);

// // core module
// //  1--os module
// // var os=require("os");
// // console.log(os.platform());
// // ====================================

// // event module
// // same like addeventlistner in javascript...to initiate a function when an event is initiated
// // var eventemitter=require("events");
// // var events=new eventemitter;
// // events.on("restricted",()=>{
// //     console.log("Hello you are in area 61, move out fast")
// // })
// // events.emit("restricted");
// // --------------------------------------------------------

// // fs module
// // Here both synchronous and asynchrounous functiona are present
// // synchronous
// var fs=require("fs");
// console.log(fs.readdirSync("./"))

// // asynchronous, so callback is added
// console.log(fs.readdir("./hello",(error,res)=>{
//     if(error){
//         console.log("cannot read directory")
//     }else{
//         console.log(res);
//     }
// }))

// ___________________________________________________


// http module
// creating a server using http

// var http=require("http");
// var server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//     res.write("The server responds according to the port number they received");
//     res.end();}
//     else if(req.url=="/login"){
//         res.write("U will be redirected to the login page");
//         res.end();
//     }else{
//         res.write("page not found")
//         res.end();
//     }
// })

// server.listen(3000);


var http=require("http");
var server=http.createServer((req,res)=>{
    if (req.url=="/"){
    res.write("Your server is loaded")
    res.end()}
    else if(req.url=="/login"){
        res.write("Your are moved to login page");
        res.end()
    }else{
        res.write("Error 404, page not found")
        res.end()
    }
   
})
server.listen(4100)

