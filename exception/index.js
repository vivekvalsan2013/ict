let x=prompt('enter the number more than 5')


try{
    x=Number(x);
    if(x>=5) throw "good";
    if(x<5) throw "bad"
}
catch(err){
    document.getElementById('demo').textContent=err;
}