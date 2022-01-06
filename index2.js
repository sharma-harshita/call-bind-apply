//  Call, Bind, Apply in JS

// These are just different different ways of invoking or calling a function 

//  When you are calling a function using any of these 3 then you dont have to define in the function that it will be taking obj as a parameter

// It will assume that the first argument which is coming while calling the function will be an object only.


//creating an object for the reference
let user = {
    name : "Raj",
    age : 24,
    salary : 50000,
    city : "Manali"
}

let user2 = {
    name : "Shine",
    age : 30,
    salary : 60000,
    city : "Shimla"
}


// creating a function which will be using this object
// This is without call bind apply
// function displayUserDetails (a) {
//     console.log("Hello inside function", a);
//     console.log(a.name + " is " + a.age + " years old. ");
// }


// When using call bind or apply
function displayUserDetails (company, designation) {
    console.log("Hello inside function", this);
    console.log(this.name + " is " + this.age + " years old. ", company, " ", designation);
}


//invoking the function and passing the object
// displayUserDetails(user);
// displayUserDetails(user2);



//  Call : In case of call each and every argument which is required to be passed to the function will be passed individually .
displayUserDetails.call(user, "TCS", "Developer");



//  Apply : In case of apply each and every argument which is required to be passed to the function will be passed inside an array .
displayUserDetails.apply(user2, ["TCS", "Developer"]);



// Bind : In case of bind, it will return you a new function. And this new function you can use anytime anywhere.
const newFunc = displayUserDetails.bind(user);
newFunc("Infosys", "Tester")




// map reduce filter 
// execution context event loop 
// call apply bind 
// promises 
// es5 es6
