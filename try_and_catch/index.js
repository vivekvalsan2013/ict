function clickme(){
    var text=document.getElementById("text").value;
    var click=document.getElementById("button");
    var message=document.getElementById("message");
    try{
    if(text=="") throw "No input found";
    if(text<5||text>10) throw "Not in between the required margin";
    else{
        document.write(`The square of ${text} is ${text*text}`)
    }
    } 
    catch(err){
        message.innerHTML=err;
    }
  finally{
    text.value="";
    }
}   