let count = 0;
function increment(){
    
    count = count + 1;
    document.getElementById("H").innerHTML = "counter : "+count;
}
counter();

function decrement(){
    if(count>0){

        count = count-1;
    }
    document.getElementById("H").innerHTML = "counter : "+count;

}

function reset(){
    
    count = count - count ;
    document.getElementById("H").innerHTML = "counter : "+count;
}
