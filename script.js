//*** Template Literals ***
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


//**** Logical Opereator ****

//** Logical AND && **
// let marks =85;
// if(marks>=33 && marks >=80){
//     console.log("Pass");
//     console.log("O");
// }
//... ... ... ... ... ... ... ... ... ... ... ... ...

//** Logical OR || **
// let marks =75;
// if(marks>=33 || marks >=80){
//     console.log("Pass");
//     console.log("O");
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Logical NOT ! **
// let  marks = 75;
// if((marks > 33 && marks <= 80) || !false){
//     console.log("Pass");
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** switch Statement **
// let color="red";
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("slow down");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("Light is broken");
// }
// console.log("after switch stt");
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
// let day = 1;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Wrong day !");
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//**** Alert and Prompt Statement ****

//** alert Statement **
// alert("something is wrong!"); 
// console.log("this is a simple page");
// // console.error("this is a error msg");
// // console.warn("this is a warn msg");

//** promt Statement **
// prompt("enter your name");
// let name = prompt ("enter your name");
// console.log(name);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//**** String Metod ****

//** str.trim() method **
// let msg="    hellow  ";
// afterTrim = msg.trim();
// console.log(afterTrim);   OR
// let password = prompt("set your password");
// console.log(password.trim());
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** str.toUpperCase() and str.toLowerCase method **
// let king = "Virat Kohli"
// console.log(king.toUpperCase());
// console.log(king.toLowerCase());
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//*** String methods with argument ***

// ** indexOf("") method **
// let love = "tmkoc";
// // console.log(love.indexOf("m"));
// console.log(love.indexOf("h"));
// ... ... ... ... ... ... ... ... ... ... ... ... ...

// ** slice("") method **
// let king = "virat";
// console.log(king.slice(0 , king.length));
// console.log(king.slice(1 , 4));
// console.log(king.slice(-1)); //5(length of string) -1 => 4 (4th index position)
// ... ... ... ... ... ... ... ... ... ... ... ... ...

// ** replace("") method **
// let king = "virat";
// console.log(king);
// console.log(king.replace("t" , "j"));
// ... ... ... ... ... ... ... ... ... ... ... ... ...

// ** repeat("") method **
// let king = "virat";
// console.log(king);
// console.log(king.repeat(8));
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//*** Method Chaining ***
// let king="          virat kohli           ";
// let nowking = king.trim();
// console.log("after trim : ", nowking);
// nowking = nowking.toUpperCase();
// console.log("after uppercase : ", nowking);
// let nowking = king.trim().toUpperCase();
// console.log(nowking);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//**** Arrays ****

//** vidualisation of array **
// let player1 = "rajat";
// let player2 = "virat";
// let player3 = "salt";
// console.log(player1 , player2 , player3);
// let players = ["rajat" , "virat" , "salt"];
// console.log(players);
// console.log(players[2]);
// console.log(players[4]);
// console.log(players.length);
// console.log(typeof players);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** creating array **
// let marks = [99 , 85 , 95 , 65 , 56];
// console.log(marks);
// let names = ["virat" , "rajat", "phill"];
// console.log(names);
// let mixed = ["josh" , 76 , 9.8];
// console.log(mixed);
// let empty = [];
// console.log(empty);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** arrays are mutable **
// let players = ["rajat" , "virat" , "salt"];
// console.log(players);
// players[2]="tim";
// console.log(players);
// players[8]="romario";
// console.log(players);
// console.log(players.length);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//**** Array Methods ****

//** push() & pop() methods **
// let cars = ["audi" , "bmw" , "xuv" , "maruti" ];
// console.log(cars);
// cars.push("toyota");
// console.log(cars);
// cars.pop("toyota");
// console.log(cars);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** unshift() & shift() methods **
// let cars = ["audi" , "bmw" , "xuv" , "maruti" ];
// console.log(cars);
// cars.unshift("toyota");
// console.log(cars);
// cars.shift("toyota");
// console.log(cars);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** indexOf() & includes() methods **
// let cars = ["audi" , "bmw" , "xuv" , "maruti" ];
// console.log(cars);
// console.log(cars.indexOf("audi"));
// console.log(cars.indexOf("tata"));
// console.log(cars.includes("maruti"));
// console.log(cars.includes("tata"));
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** concat() methods **
// let color1 = ["red" , "blue" , "green"];
// let color2 = ["white" , "black" , "yellow"];
// console.log(color1.concat(color2));
// console.log(color2.concat(color1));
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** reverse() methods **
// let color1 = ["red" , "blue" , "green"];
// console.log(color1.reverse());
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** slice() methods **
// let colors = ["red" , "blue" , "green" , "white" , "black" , "yellow"];
// console.log(colors);
// console.log(colors.slice(2));
// console.log(colors.slice(2 , 4));
// console.log(colors.slice(8));
// console.log(colors.slice(-4));
// console.log(colors);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** splice() methods **
// let colors = ["red" , "blue" , "green" , "white" , "black" , "yellow"];
// console.log(colors);
// // console.log(colors.splice(4));
// // console.log(colors);
// // console.log(colors.splice(0 ,1));
// // console.log(colors);
// console.log(colors.splice(0 , 1 , "purple" , "golden"));
// console.log(colors);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** sort() methods **
// let colors = ["red" , "blue" , "green" , "white" , "black" , "yellow"];
// console.log(colors);
// console.log(colors.sort());
// let num = [97,76,100,64,82,65,28,56];
// console.log(num);
// console.log(num.sort()); //firt number convert into string and then sort
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Array references ***
// let arr = ['a' , 'b' , 'c'];
// let arrCopy = arr;
// arr = arrCopy;
// console.log(arr = arrCopy);
// arr.push('d');
// console.log(arr);
// console.log(arrCopy);
// arrCopy.pop();
// console.log(arrCopy);
// console.log(arr);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Constant Array ***
// const arr = [1 , 2 , 3];
// console.log(arr);
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Nested Array ***
// let nums = [ [1,2] , [4,4,2] , [6,7,6,8] , [9,8,4] ];
// console.log(nums);
// console.log(nums.length);
// console.log(nums[2]);
// console.log(nums[3].length);
// console.log(nums[2][2]);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
//tic-tac-toe
// let game = [['X',null,'0'] , ['X',null,'0'] , ['X',null,'0']];
// console.log(game);
// console.log(game[0]);
// console.log(game[0][1]='0');
// console.log(game[0]);
// console.log(game);
// ... ... ... ... ... ... ... ... ... ... ... ... ...