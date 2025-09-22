function EventLoop(){
    return new Promise((resolve)=>{
        setImmediate(()=>resolve(console.log("Hello World")),2000)
    });
} 
function display(){
    console.log("Hello world");
}
EventLoop(display);