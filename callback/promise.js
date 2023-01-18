// var promise=new Promise(function(resolve,reject){
//     let x=prompt('Enter a value for x');
//     let y=prompt('Enter a value for y2');
//     if(x==y){
//         resolve("Equal value")
//     }else{
//         reject('Not equal')
//     }

// })

// promise
// .then(function(s){
//     document.write(s)
// })
// .catch(function(e){
//     document.write(e)
// })

// -------------------------------------


// To Take the sum of a number and dividing it using another and displaying it using another callback

// let promise= new Promise(function(resolve,reject){
//     var x= prompt('enter a number')
//     var y=prompt("ENter 2nd number")
//     var sum=sum(x,y);
//     // Here there is no chance for getting the error message, so no need for reject()
//     resolve(sum);
  
// })

// promise
// .then(function(a){
//     let average=a/2;
//     document.write(`The sum of the number is ${a}`)
//     document.write(`The average of the number is ${average}`)
// })

// ------------------------------------------------------------------------------------------------


//acccesing the AJAX using promise 

function experiment(){
var xhtml= new XMLHttpRequest();
xhtml.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var jdata=JSON.parse(this.responseText);
        var output="";
        for(let i=0;i<jdata.length;i++){
            output += `<li>${jdata[i].title}</li>`
        }
        let promise=new Promise(function(resolve,reject){
            resolve(output)
        })
        promise
        .then(function(a){
            let demo=document.getElementById("demo")
            demo.innerHTML=output;
        })
    }
}

xhtml.open("GET","https://jsonplaceholder.typicode.com/posts",true)
xhtml.send()
}   

// ______________________________________________________________________________


// case 1--to get a post without using callback

// creating and array of posts

// let posts=[
//     {
//         title:"One",
//         body:"politics"
//     },{
//         title:"two",
//         body:"Films"

//     }
// ];

// // case 1--to get a post without using callback
// let out="";
// // Creating a function to get this post
// function togetpost(){
// setTimeout(function(){
//     // to itterate the value of body key from the array
//     posts.forEach(function(a){
//         out += `<li> ${a.body} </li>`
//     })
//     var demo=document.getElementById("demo");
//     demo.innerHTML=out;
// },3000)}

// // creating a function to push a new post into the array
// function createpost(newpost,a){
//     setTimeout(function(){
//         // to push new post to the arrya
//         posts.push(newpost)
//         a();
//     }, 4000);
// }


// createpost({title:"Three", body:"gaming"},togetpost)

// case -2 same case using prmomise

let posts=[
    {
        title:"One",
        body:"politics"
    },{
        title:"two",
        body:"Films"

    }
];
let out="";
function getpost(){
    setTimeout(function(){
        posts.forEach(function(x){
            out+=`<li>${x.body}</li>`
        })
    let print=document.getElementById("demo")
    print.innerHTML=out;
    }, 3000);

    
    
}

function createpost(newpost){
        return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(newpost)
            resolve()
        },4000)
    })
}

createpost({title:"Three", body:"gaming"})
.then(getpost)