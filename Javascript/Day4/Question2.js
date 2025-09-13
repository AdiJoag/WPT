//The Array inbuild Library function
let arr = [1,2,5,3,4];
let choice  = 7;

switch(choice){
    case 1 : console.log(`The size of the Array : ${arr.push(10)}`);
             console.log(`The Value of the Array : ${arr}`);
             break;

    case 2 : console.log(arr.pop());
             console.log(arr);
             break;

    case 3 : console.log(arr.unshift(0));
             console.log(arr);
             break;

    case 4 : console.log(arr.shift());
             console.log(arr);
             break;

    case 5 : 
             (arr.splice(1,2,9));
             console.log(arr);
             break;

    case 6 : console.log(arr.sort());
             break;

    case 7 : console.log(arr.slice(1,4));
             break;

    defalut : console.log("Invalid Choice ");
}
