// console.log("Hello world !!");

//normal object and accessing its methods and other attributes
var myEmployee1 = {
    name : "Joe Smith",
    age : 24,
    empDetails : function (){
        console.log(this.name + " is " + this.age + " years old"); //joe smith is 24 years old
    }
}

// myEmployee.empDetails();

// *****************************************************

//we have a function inside which we want to access this object
//This is a wrong way, because your function is not dynamic, it can not accept different object at diff scenarios

// function companyEmployeeDetails(){
//     myEmployee1.empDetails()
// }

// companyEmployeeDetails();

// *****************************************************


// Better way of writing the function 

// function companyEmployeeDetails(obj){
//     obj.empDetails();
// }

// companyEmployeeDetails(myEmployee1);


// Best way possible 

var myEmployee2 = {
    name : "gaurav sagar",
    age : 30,
    empDetails : function (){
        console.log(this.name + " is " + this.age + " years old"); //joe smith is 24 years old
    }
}

function companyEmployeeDetails(salary, designation){
    // console.log("using calll");
    this.empDetails()
    console.log("he is earning "+ salary + " at " + designation);
}

companyEmployeeDetails.call(myEmployee1, 20000, "developer");
companyEmployeeDetails.apply(myEmployee2, [20000, "developer"]);

var newEmp = companyEmployeeDetails.bind(myEmployee2);
newEmp(20000, "developer");

// when you are calling a function using "call", then you need not to create object's argument
// it will be default saved in the reference and you can access it using this keyword

// call = whenever you are invoking the function using call, then other arguments which is required by the function
// will  be passed individually

// apply = whenever you are invoking the function using apply, then other arguments which is required by the 
// function will not be passed individually, they will be passed in an array

// bind = it will return a new function , and then this function should be invoked.



// function sum (a, b){
//     return a+b
// }

// sum (4, 3)



















