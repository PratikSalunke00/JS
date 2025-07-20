//** Template Literals **

// let a=10;
// let b=5;
// // let output="The addition is :" + (a+b) + "Rupees.";
// let output=`The addition is : ${a+b} Rupees.`;
// console.log(output);
//... ... ... ... ... ... ... ... ... ... ... ... ...


//**** Operators in JS ****

//** Arithmattic Operators **
// let a=5;
// let b=2;
// console.log("a=",a , "& b =" ,b );
// console.log("a+b=" , a+b);
// console.log("a-b=" , a-b);
// console.log("a*b=" , a*b);
// console.log("a/b=" , a/b);
// console.log("a%b=" , a%b);
// console.log("a**b=" , a**b);
//... ... ... ... ... ... ... ... ... ... ... ... ...

//** Unary Operator **
// let a=5;
// let b=2;
// console.log("a=",a , "& b =" ,b );
// a++;
// // a--;
// console.log("a =" , a);

// console.log("a++=" , a++);
// console.log("a=" , a);

// console.log("a--=" , a--); 
// console.log("a=" , a);

// console.log("--a=" , --a); 
// console.log("a=" , a);

// console.log("++a=" , ++a); 
// console.log("a=" , a);
//... ... ... ... ... ... ... ... ... ... ... ... ...

//** Assignment Operators **
//  = +=-= *= %= **=
// let a=5;
// let b=2;
// a+=4;//a=a+4
// console.log("a=",a);//9
// a-=4;//a=a-4
// console.log("a=",a);
// a*=4;//a=a*4
// console.log("a=",a);
// a/=4;//a=a/4
// console.log("a=",a);
// a%=4;//a=a%4
// console.log("a=",a);
// a**=4;//a=a**4
// console.log("a=",a);
//... ... ... ... ... ... ... ... ... ... ... ... ...

//**  Comaparison Operators **
// > >= < <= == !=
// let age =18;
// console.log(age>18);
// console.log(age>=18);
// console.log(age<18);
// console.log(age<=18);
// console.log(age==18);
// console.log(age!=18);
//... ... ... ... ... ... ... ... ... ... ... ... ...

//**** Conditional Satement **** 

//** if Statement **
// console.log("Before my if  Statement");
// let age = 18;
// // let age = 14;
// if (age>=18){
//     console.log("you can vote");
//     console.log("you can drive");
//     let a = 5;
//     console.log(5 * a);
// }
// if (age<18){
//     console.log("you cannot vote");
//     console.log("you cannot drive");
//     let a = 5;
//     console.log(5 * a);
// }
// console.log("After my if  Statement");
//... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
// let color ="red";
// // let color ="yellow";
// // let color ="green";

// if(color === "red"){
//     console.log("Stop! Light color is red");
// }
// if(color === "yellow"){
//     console.log("Slow down.. Light color is yellow");
// }
// if(color === "green"){
//     console.log("Go. Light color is green");
//}
//... ... ... ... ... ... ... ... ... ... ... ... ...

// ** else if Statement **
// let age = 14;
// if (age >= 18) {
//     console.log("you can vote");
// }
// else if (age < 18) {
//     console.log("you cannot vote");
// }
//... ... ... ... ... ... ... ... ... ... ... ... ...

//** else Statement **
// let age = 18 ;
// if(age >= 18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }
//... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
// let size = "XL";
// if(size === "XL"){
//     console.log("price is  Rs. 250");
// } else if (size==="L"){
//     console.log("price is  Rs. 200");
// } else if (size==="M"){
//     console.log("price is  Rs. 100");
// } else {
//     console.log("price is  Rs. 50");
// }
//... ... ... ... ... ... ... ... ... ... ... ... ...

//** Nested if-else Statement **
// let marks = 78;
// if (marks >= 33) {
//     console.log("Pass");
//     if (marks >= 80) {
//         console.log("Grade : O");
//     } else {
//         console.log("Grade : A");
//     }
// } else {
//     console.log("Better luck next time!");
// }
//... ... ... ... ... ... ... ... ... ... ... ... ...