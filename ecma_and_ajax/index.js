// "use stricT"
// let x=1;
// function myfun(){
//   let message="Hello how are you"
//   console.log(message.slice(message.indexOf("a"),message.indexOf("u")+1))
// }
// myfun()

// let numbers=['1','2','3','4'];
// let text="";
// numbers.forEach(fun);
// document.write(text)

// function fun(i){
//     text += i+"<br>"
// }

// let brands=["maruti","bmw","benz","hyundai","jaguar"]
// var itteratee = brands.filter(itterate);
// console.log(itteratee);
// function itterate(i){
//     return i.endsWith("i")
// }

let cars={
    name:"alto my fav",
    fuel:"petrol",
    mileage:"23km"
}

let details_in_json=JSON.stringify(cars);
console.log(details_in_json);
let details_in_js=JSON.parse(details_in_json);
console.log(details_in_js);