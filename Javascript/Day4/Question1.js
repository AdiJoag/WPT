// print the factorial by function
/*function  getFactorial(){
    let fact=1;
    for(let i=1;i<=5;i++){
        fact = fact * i;
    }
    console.log("Factorial is :" +fact);
}
getFactorial()
*/

//Recursion
console.log("Factorial is :" +getFactorial(5));
function  getFactorial(n){
    if(n==0||n==1){
    return 1;
   }
   else{
    return n*getFactorial(n-1);
   }
   
}
