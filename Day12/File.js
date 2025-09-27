/* Try File Handling Write and Read data synchronous method 
   and try asynchronous method  */

const http  =  require('http');
const s = http.createServer(function(req,res){

    const f = require('fs');
        f.readFile("sample1.txt", "utf8", (err, data) => {
        if (err) {
            console.log("error occured " + err)
        } else
            console.log(data);
        })
        
    })
f.readFile() 