// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }
    
//     return inner;
// }

// outer();
// outer();
// outer();
// outer();




// const person = {name:"Saroj",age:21,address:"Patna"};
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// person.age = 22;
// console.log(person.age);
// console.log(person.address);
// console.log(person);

// person.college = "MNIT Jaipur";

// console.log(person);



// const Saroj = {
//     Age : 22,
//     College : "MNIT Jaipur",
//     Address : {
//         City : "Patna",
//         State : "Bihar",
//         PinCode : 841402
//     }
// };

// const Student = [
//     {name:"Saroj",marks:98},
//     {name:"Aman",marks:75},
//     {name:"Mohit",marks:80},
//     {name:"Rohit",marks:43},
//     {name:"Gaurav",marks:52},
//     {name:"Pancham",marks:88},
//     {name:"Gupta",marks:65}

// ];

// Saroj.Address.City = "Jaipur";

// console.log(Saroj);
// console.log(Student);
// const student = Student.map((student) =>{
//     return student.name;
// });



// console.log(student);

// const topper = Student
    
//     .map(student => student.name);

// console.log(topper);



const Saroj = {
    Age : 22,
    College : "MNIT Jaipur",
    Address : {
        City : "Patna",
        State : "Bihar",
        PinCode : 841402
    }
};

const {College,Address,Age} = Saroj;
console.log(Age);
console.log(College);
console.log(Address);