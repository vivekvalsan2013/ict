const express=require("express")
const app= new express();
const nodemailer=require("nodemailer")
app.use(express.json());

let transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"vivekvalsanresume@gmail.com",
        pass:"gkoaftbxgdykfzeo"
        },
    tls:{
        rejectUnauthorized:false
    }     

})

let mailOptions={
    from:"vivekvalsanresume@gmail.com",
    to:"vivekvalsanmt@gmail.com",
    subject:"Nodemailer Testing mail",
    text:"This is a testing mail to check the working of nodemailer"
}

transporter.sendMail(mailOptions,(err,succes)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Mail sent successfully")
    }
})





app.listen(3001,()=>{
    console.log("The server is listening to port number 3001")
})