function ajaxfun(){
var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var jpeople=(JSON.parse(this.responseText))
        var jjpeople =jpeople.people;
        let out="";
        for(var i=0;i<jjpeople.length;i++){
            out += `<li>${jjpeople[i].name}</li>`
        }
        document.getElementById("demo").innerHTML=out
        
    }
}
xhttp.open("GET","people.json",true);
xhttp.send();
}