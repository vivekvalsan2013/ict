function ajaxfun(){
var xhtml=new XMLHttpRequest();
xhtml.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var apidata=JSON.parse(this.responseText)
        var output="";
        for(i=0;i<apidata.length;i++){
            output +=`<li>${apidata[i].title}</li>`
        }
        document.getElementById("demo").innerHTML=output;
       
    }
}
xhtml.open("GET","https://jsonplaceholder.typicode.com/posts",true);
xhtml.send();
}


emailregex=/^\w+([\.-]\w)+@\w+([\.-]\w)+(\.[a-z]{2,3})+(.[a-z]{2,3})?$/
passwordregex=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%])(?=.*[A-Z][a-z][0-9]).{8,}$/
phoneregex=/^\+(?\d{2,3})?[\ -.]?(\d{4})[\ -.]?(\d{4}))$/