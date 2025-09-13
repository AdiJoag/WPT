//function for addition
console.log("------The Function in javascript-------");

function add(a,b,c){
    let sum = a + b + c;
    console.log(`The Addition is : ${sum}`);
}
add(10,20,30);

//Return with function
function sub(a,b,c){
    let substarct = a - c - b; 
    return substarct;
}
console.log(`The Substraction is : ${sub(40,20,10)}`);

//the lambda funtions
let multiplication = (a,b,c) =>
            (a*b*c);
console.log(`The multiplication is : ${multiplication(1,2,3)}`);

//
function div(a,b){
    let div = a / b;
    console.log(`The division is : ${div}`);
}
div(10,30);
