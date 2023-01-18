// function add(a,b,c){
//     document.write(`The sum of the number ${a} and ${b} are ${a+b} ${"<br>"}`)
//     c();
// }
// function after(){
//     document.write(`Mission succes`)
// }

// add(100,100,after)


// // // // to take two numbers and add it and the result should be used for substraction

// function add(a,b,c){
//     let sum =a+b;
//     document.write(`The sum of number ${a} and ${b} are ${sum} ${"<br>"}`)
//     c(sum,a)

// }
// function subsract(c,d){
//     document.write(`The difference bw the number ${c} and ${d} are ${c-d}`)
// }

// add(100,100,subsract)

// // To take the input from the user and display it using callback

// function getdata(c){
//     var x=prompt('enter a number');
//     c(x)
// }
// function display(a){
//     alert(`The given number is ${a}`)
// }
// getdata(display)


// To Take the sum of a number and dividing it using another and displaying it using another callback

// function add(callback1){
//     let x=prompt('Enter the first number');
//     let y=prompt("Enter the second number");
//     sum=x+y;
//     callback1(sum,display)
// }
// function average(a,callback2){
//     let c=a/2;
//     callback2(c)
// }
// function display(a){
//     document.write(`The average is ${a}`)
// }

// add(average);

var p = new Promise((resolve, reject) => {
    return Promise.reject(Error('The Fails!'))
  })
  p.catch(error => console.log(error.message))
  p.catch(error => console.log(error.message))