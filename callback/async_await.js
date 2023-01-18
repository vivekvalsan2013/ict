// aync and await are used instead of .then and .catch in promise
// async function will return promise o/p and it can be made await using await function

// ____________________________________________________________________


// // ajax using aync and await
// function experiment(){
//     var xhtml= new XMLHttpRequest();
//     xhtml.onreadystatechange= async function(){
//         if(this.readyState==4 && this.status==200){
//             var jdata=JSON.parse(this.responseText);
//             var output="";
//             for(let i=0;i<jdata.length;i++){
//                 output += `<li>${jdata[i].title}</li>`
//             }
//             let promise=new Promise(function(resolve,reject){
//                 resolve(output)
//             })
//             let ajax_using_await= await promise;
//             document.getElementById("demo").innerHTML=output;
//             }
//         }
       
    
    
    
//     xhtml.open("GET","https://jsonplaceholder.typicode.com/posts",true)
//     xhtml.send()
// }
// _____________________________________________________________________________________________________

// await is provided to make a function execution wait to make other execution get completed


//  async function sample(){
//      var y= await "hello";
//      return y;
// }

// document.write('poda <br>')
// sample().then(function(x){
//     document.write(`Hei ${x}`)
// })
// document.write("<br> ezheech poda")

// Post creating and getting example

let posts=[
    {
        title:"One",
        body:"politics"
    },{
        title:"two",
        body:"Films"

    }
];

var out="";
function getpost(){
 
    setTimeout(function(){
        posts.forEach(function(i){
            out+=`<li> ${i.body} </li>`
        })
        document.getElementById("demo").innerHTML=out;
    },3000)
}

function createpost(newvalue){
   return new Promise(function(resolve,reject){
        posts.push(newvalue)
        resolve()
    })
}

async function sample(){
    await createpost({title:"Three",body:"Poda aadine"})
    getpost();
}
sample();

// here since await is provided to creatpost, it will execute first before the getpost, bcoz of the settimeout,
