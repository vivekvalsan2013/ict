function ajaxfun(){
// Step-1 XHR Creation
 var xhttp=new XMLHttpRequest();
//step4 defining eventlistener and taking the data from the server
xhttp.onreadystatechange= function(){
    if(this.readyState==4 && this.status==200){
        document.getElementById("demo").innerHTML=this.responseText;
    }
}
// Initaiting the created XHR Request
xhttp.open("GET","ajax.txt",true);
// sending the request
xhttp.send();
}


// var xhttp= new XMLHttpRequest();
// xhttp.onreadystatechange= function(){
//     if(this.readystate==4&& this.status==200){
//         document.getElementById("demo").innerHTML=this.responseText;
//     }
// }
// xhttp.open("GET","ajax.js",true);
// xhttp.send();