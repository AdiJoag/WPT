
 let pattern5= /[a-z A-Z]+[0-9]{3}$/

var arr6= ['hellow123','1234567',
'678','re5tr34','rto09','row333','111rrrr444']

arr6.filter((element)=>{
    return element.match(pattern5)
}).forEach((v)=>{console.log(v)})

let emailpattern = /[a-zA-Z -_]+@[a-z A-z]+\.[a-z A-Z]{2,3}$/
var arr7= ['---@aaa.com','pra@gmail.org',
'pra_g@hotmail.com','pra@hotmail','pra__gre@ggg.vvv',
"test@gov.in"]

arr7.filter((element)=>{
    return element.match(emailpattern)
}).forEach((element)=>{console.log(element)})




