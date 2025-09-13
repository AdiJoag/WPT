// //OBJECT
// let Employee = {
//         FirstName :"JANVI",
//         LastName :"ZAMARE",
//         Email : " janvi@gmail.com",
//         Date_of_Birth : " 27/08/2000"  
// };
// console.log(Employee);

// let Emp = new Object({
//                 Name1 : "Pratik",
//                 Age : "21",
//                 Name2 : "Aditya",
//                 Age2 : "22"
//         });
// Emp.DOB = "2/8/2003";
// console.log(Emp);

//Function in object
let person = new Object({
        Name : "Ram",
        id : 121,
        EmpType : "Fresher",
        Dateofjoin : 20/8/2025,
        getData : function(){
              return this.Name;
                
        }
});
console.log(person.Name);