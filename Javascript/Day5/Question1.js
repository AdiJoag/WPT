/*declare function calculate(...a) and display addition of data 
display only odd numbers from given data */
let a; 
function Add(...a){
        let Sum = 0;
        for(let i = 0; i< a.length ;i++){
                Sum += a[i];
        }
        
        console.log(`The sum of the give number is : ${Sum}`); 
        if(Sum % 2 !== 0){
            console.log("The number is odd ");
        } 

        else{
               console.log("The number is Even ");
        } 

//with above concept use Math.max() method to display maximum number
         
          const max = Math.max(...a);
          console.log(`the max number in array is : ${max}`);
}
Add(3,5);
