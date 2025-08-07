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


//**** Loops ****

//** for loop **
// for(let i=1; i<=5; i++){
//     console.log(i);
// }
// for(let i=10; i>=1; i=i-3){
//     console.log(i);
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
// To print all odd numbers (1 to 15)
// for(let i=1;i<=15;i+=2){
//     console.log(i);
// }
// console.log("backwords loop");
// for(let i=15;i>=1;i-=2){
//     console.log(i);
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
// To print all even numbers (2 to 10)
// for(let i=2;i<=10;i+=2){
//     console.log(i);
// }
// console.log("backwords loop");
// for(let i=10;i>=2;i-=2){
//     console.log(i);
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Infinite loops **
// for(let i=1;i>=0;i++){
//     console.log(i);
// }
// for(let i=1;i<=5;i--){
//     console.log(i);
// }
// for(let i=1;i++){
//     console.log(i);
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
// To print the multiplication table for 5
// for(let i=5; i<=50;i+=5){
//     console.log(i);
// }
// let p = prompt("write your number");
// p=parseInt(p);
// for(let i=p; i<= p*10; i=i+p){
//     console.log(i);
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Nested for loop **
// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** while loop **
// let i = 1;
// while (i<=5){
//     console.log(i);
//     i++;
// }
// let i = 5;
//  while(i>=1){
//     console.log(i);
//     i--;
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
//TO guess the favorite ipl team
// const favoriteIplTeam = "RCB";
// let guessIplTeam = prompt("Guess my favorite ipl team");
// // while((guessIplTeam != favoriteIplTeam) && (guessIplTeam != "quit")){
// //     console.log("wrong guess");
// //     guessIplTeam =prompt("please try again");
// // } OR
// while(guessIplTeam != favoriteIplTeam) {
//     if(guessIplTeam == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guessIplTeam = prompt ("try again");
// }
// if(guessIplTeam == favoriteIplTeam){
//     console.log("Yes , you are right ");
// }else{
//     console.log("you quit");
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** break statement **
// let i =1;
// while (i<=5) {
//     if(  i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("you used break keyword at 3");
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//**** Loops with Arrays ****

//** one example **
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for(let i=0; i<=fruits.length; i++){
//     console.log(i, fruits[i]);
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Nestedd Loops with Nested Arrays **
// let players = [["Virat", "Rajat", "Phill"], ["Josh", "Bhuvaneshwar", "Dayal"]];
// for(let i=0; i<=players.length; i++) {
//     console.log(i, players[i], players.length);
//     for(let j=0; j<players[i].length; j++) {
//         console.log(`j=${j}, ${players[i][j]}`);
//     }
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** for of loop ***

//** one example **
// let players = ["Virat", "Rajat", "Phill", "Josh", "Bhuvaneshwar", "Dayal"];
// for(player of players) {
//     console.log(player);
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Nested for of loop **
// let players = [["Virat", "Rajat", "Phill"], ["Josh", "Bhuvaneshwar", "Dayal"]];
// for(list of players) {
//     for(player of list) {
//         console.log(player);
//     }
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//**** TO-Do app ****
// let todo=[];
// let req= prompt("please enter your request");
// while(true) {
//     if(req == "quit") {
//         console.log("quiting app");
//         break;
//     }
//     if(req == "list") {
//         console.log("...............");
//         for( let i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("..............")
//     } else if(req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     } else if(req == "delete") {
//         let idx = prompt("please enter the task index");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     } else {
//         console.log("wrong request");
//     }
//     req= prompt("please enter your request");
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//**** JS Object Literals ****

// ** Practice example **
// let player1 = ["Virat", 36, 973];
// console.log(player);

// let player = {
//     name:"Virat",
//     age:36,
//     runs:973
// };
// console.log(player);

// const player = {
//     name:"Virat",
//     age:36,
//     runs:973
// };
// console.log(player);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
//TO creat an object literal for the properties of thread / twitter post which includes - 
//username, content, likes, reposts, tags
// const post  = {
//     username: "@pratiksalunke682",
//     content: "This post is for TMKOC",
//     likes:200,
//     reposts:5,
//     tags:["@tmkocofficial", "@tmkocfans"]
// };
// console.log(post);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Get values of object **
// const post  = {
//     username: "@pratiksalunke682",
//     content: "This post is for TMKOC",
//     likes:200,
//     reposts:5,
//     tags:["@tmkocofficial", "@tmkocfans"]
// };
// console.log(post);
// console.log(post.username);
// console.log(post["content"]);

// let prop = "reposts";
// console.log(post[prop]);

// const RCB = {
//     1:"Rajat",
//     2:"Phill",
//     true: "paddical",
//     null: "otherTeamMembers"
// };
// console.log(RCB[1]);  //here 1 is conveted into string
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** To add and update value of object literals **
// const student = {
//     name: "Virat",
//     age: 36,
//     runs: 973,
//     city: "Delhi"
// };
// console.log(student);
// console.log(student.city= "Bengaluru");
// console.log(student.city);
// console.log(student);
// console.log(student.nickName= "Chiku");
// console.log(student);
// console.log(delete student.age);
// console.log(student);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Nested Objects or Object of Objects ***
// const teamPlayer = {
//     virat: {
//         format: "all",
//         city: "Bengaluru"
//     },
//     rajat: {
//         format: "odi",
//         city: "Delhi"
//     },
//     phill: {
//         format: "T20",
//         city: "Hyderabad"
//     }
// };
// console.log(teamPlayer);
// console.log(teamPlayer.virat);
// console.log(teamPlayer.rajat.city);
// console.log(teamPlayer.phill.format);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Array of Objects ***
// const teamPlayer = [
//     {
//         name: "virat",
//         format: "all",
//         city: "Bengaluru"
//     },
//     {
//         name: "rajat",
//         format: "odi",
//         city: "Delhi"
//     },
//     {
//         name: "phill",
//         format: "T20",
//         city: "Hyderabad"
//     }
// ];
// console.log(teamPlayer);
// console.log(teamPlayer[0]);
// console.log(teamPlayer[1].name);
// console.log(teamPlayer[2].format);
// console.log(teamPlayer[0].aura= "infinity");
// console.log(teamPlayer);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//**** Math Object ****

//** Properties **
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Methods **
// console.log(Math.abs(46));
// console.log(Math.abs(-46));

// console.log(Math.pow(2,4));
// console.log(Math.pow(4,3));

// console.log(Math.floor(5));
// console.log(Math.floor(5.5));
// console.log(Math.floor(5.99999));
// console.log(Math.floor(-5));
// console.log(Math.floor(-5.5));

// console.log(Math.ceil(5));
// console.log(Math.ceil(5.5));
// console.log(Math.ceil(5.99999));
// console.log(Math.ceil(-5));
// console.log(Math.ceil(-5.5));

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Random Integer **
// To generate random number from 0 to 10
// let rnum = Math.random();
// console.log(rnum);
// rnum = rnum *10;
// console.log(rnum);
// rnum = Math.floor(rnum);
// console.log(rnum);

// let rnum = Math.floor(Math.random()*10) + 1;  //+1 is for to generate 10
// console.log(rnum);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
//To generate random number from 1 to 100
// let rnum = Math.floor(Math.random() * 100 )+ 1;
// console.log(rnum);

//To generate random number from 1 to 5
// let rnum = Math.floor(Math.random()* 5)+ 1;
// console.log(rnum);

//To generate random number from 21 to 25
// let rnum = Math.floor(Math.random()* 5)+ 21;
// console.log(rnum);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Number Guessing Game **
// User enters a max number & then tries to guess a random generated number between 1 to max.
// const max = prompt("Enter the max number");
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess the number");
// while(true) {
//     if(guess == "quit") {
//         console.log("user quit");
//         break;
//     }

//     if(guess == random) {
//         console.log("you are right! congrats!! random number was" , random);
//         break;
//     } else if(guess < random) {
//         guess = prompt("hint: your guess was small. please try again");
//     } else {
//         guess = prompt("hint: your guess was large. please try again");
//     }
// }
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//**** Function ****

//** some examples **
// function hello() {
//     console.log("After 17 seasons of waiting, red color finally shines.");
// }
// hello();

// function royalLoyal() {
//     console.log("Red waited silently for 17 years. Now, it shines proudly.");
//     console.log("Finally, the red color shines after 17 years.");
// }
// royalLoyal();
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetions **
//To print a number fron 1 to 48 using function and loops
// function print1to48() {
//     for(let i=1; i<=48; i++) {
//         console.log(i);
//     }
// }
// print1to48();

//To print person is adult or not
// function isAdult() {
//     let age = 18;
//     if(age>=18) {
//         console.log("Adult");
//     } else {
//         console.log("not adult");
//     }
// }
// isAdult();
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//To create a function that prints a poem.
// function printPoem() {
//     console.log("Finally, the red begins to shine,");
//     console.log("Seventeen years, now it’s our time.");
//     console.log("Cheers erupt, the wait is done,");
//     console.log("RCB rises — we’ve finally won! ❤️💚");
// }
// printPoem();
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//To createe a function to roll a dice & always display the value of the dice (1 to 6).
// function rollDice() {
//     let random = Math.floor(Math.random() * 6) + 1;
//     console.log(random);
// }
// rollDice();
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Functions with Arguments **
// function printName(name) {
//     console.log(name);
// }
// printName("Virat Kohli");

// function printInfo(name, age) {
//    console.log(`${name}'s age is ${age}`);
// }
// printInfo("Pratik", 20);
// printInfo("Rajat", 24);
// printInfo("Altamash");
// printInfo(28);

// function sum(a, b) {
//     console.log(a+b);
// }
// sum(1,2);
// sum(16,2);
// sum(8,2);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetions **
//To create a Function that give us the average of 3 nummbers
// function calAvg(a, b, c) {
//    let avg = (a+b+c) / 3;
//    console.log(avg);
// }
// calAvg(2,4,6);
// console.log(calAvg);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//To create a Function that prints the multiplication table of a number
// function printTable(n) {
//     for(let i=n; i<=n*10; i+=n ) {
//         console.log(i);
//     }
// }
// printTable(6);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** return keyword ***
// function sum(a, b) {
//     return a+b;
// }
// let s = sum(1,2);
// console.log(s);
// console.log( sum(8,2));
// console.log(sum(sum(1,2), 3));

// function isAdult(age) {
//     if(age >= 18) {
//         return "adult";
//     } else {
//         return "not adult";
//     }
// }
// isAdult(55);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

// function isAdult(age) {
//     if(age >=18) {
//         return "adult";
//     } else {
//         return "not adult";
//     }
// }
// isAdult(9);
// let rvalue = isAdult(9);
// console.log(rvalue);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetions **
//To create s Function thet retuurns the sum of nnumbers from 1 to n.
// function getSum(n) {
//     let sum  = 0;
//     for(let i=1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// let mySum = getSum(5);
// console.log(mySum);
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//To create a Function that returns the concatenation  of all strings in an array.
// let str = ["hi", "hello", "bye", "!"];
// function concat(str) {
//     let result = "";
//     for(let i=0; i<=str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }
// let myConcat = concat(str);
// console.log(myConcat);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//**** Scope in JS ****

//** Function scope **
// function calSum(a,b) {
//     let sum = a+b;
//     console.log(sum);
// }
// calSum(1,2); // it prints sum
// console.log(sum);  // it gives error like sum is not defined
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Block scope **
// {
//     let a = 2;
//     var b = 4;
//     const c = 65;
// }
// // console.log(a);
// console.log(b);
// // console.log(c);

// for(let i=1; i<=5; i++) {
//     console.log(i);
// }
// console.log(i);  // It gives error like i is not defined
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Lexical scope **
// function outerFunc() {
//     let x = 5;
//     let y = 4;
//     function innerFunc() {   //Function scope
//         let a = 20;  // It will not access  
//         console.log(x);
//         console.log(y);
//     }
//     // console.log(a);  // It will gives error like a is not defined
//     innerFunc();
// }
// outerFunc();
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetion **
// What will be the output
// let greet = "hello";
// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);
//     }
//     // innerGreet();
// }
// console.log(greet);
// changeGreet();
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Function Expressions ***
// const sum = function(a,b) {
//     return a + b;
// }
// sum(2,3);
// console.log(sum(2,3));
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Higher order function ***
// function multipleGreet(func, count) {
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }
// let greet = function() {
//     console.log("Virat Kohli");
// }
// greet();
// multipleGreet(greet,  10);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Higher order function (Returns) ***
// let request = "odd";  // If it even then 'else if' block execute
// function oddOrevenFactory(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }
//     } else if(request == "even") {
//         return function(n) {
//             console.log(n%2 == 0);
//         }
//     } else {
//         console.log("Wrong request");
//     }
// }
// console.log(request);
// let func = oddOrevenFactory(request);
// func(7);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Methods ***
// const calculator = {
//     num: 18,
//     add: function (a, b) {
//         return a + b;
//     },
//     sub: function (a, b) {
//         return a - b;
//     },
//     mul: function (a, b) {
//         return a * b;
//     }
// }
// console.log(calculator);
// console.log(calculator.add(18,18));
// console.log(calculator.sub(1,18));
// console.log(calculator.mul(18,8));
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Methods Shorthand **
// const calculator = {
//     num: 18,
//     add(a, b) {
//         return a + b;
//     },
//     sub(a, b) {
//         return a - b;
//     },
//     mul(a, b) {
//         return a * b;
//     }
// }
// console.log(calculator);
// console.log(calculator.add(18,18));
// console.log(calculator.sub(1,18));
// console.log(calculator.mul(18,8));
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** 'this' keyword ***
// const student = {
//     name: "abc",
//     age:24,
//     eng: 95,
//     math: 93,
//     phy: 85,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got average marks = ${avg}`);
//     }
// }
// console.log(student.getAvg());
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//*** try & catch ***
// console.log("tmkoc");
// console.log("tmkoc");
// //let a = 5;
// try {
//     console.log(a);
// } catch(e) {
//     console.log("caught an error ... a is not defined");
//     console.log(e);
// }
// console.log("Virat Kohli");
// console.log("Virat Kohli");
// console.log("Virat Kohli");
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Arrow Function ***
// const sum = (a, b) => {
//     console.log(a + b);
// };
// console.log(sum);
// console.log(sum(4,4));

// const cube = (n) => {
//     return n * n * n;
// };
// console.log(cube(2));
// let c = cube(6);
// console.log(c);

// const pow = (a, b) => {
//     return a ** b;
// };
// console.log(pow(2, 2));
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Implicit return in Arrow functions ***
// const mul = (a, b) => (a * b);
// console.log(mul);
// console.log(mul(4,6));
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Set Timeout ***
// console.log("Finally,"); 
// setTimeout( () => {
//     console.log("after 17 years");
// }, 1600);
// console.log("the red color shines");
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** Set Interval ***
// console.log("Finally,"); 
// let id = setInterval( () => {
//     console.log("after 17 years");
// }, 1600);
// console.log("the red color shines");
// console.log(id);

// let id2 = setInterval( () => {
//     console.log("Taarak Mehta Ka Ooltah Chashmah");
// }, 1600);
// console.log(id2);

// clearInterval(id);
// ... ... ... ... ... ... ... ... ... ... ... ... ...


//*** this with Arrow Functions ***
// const student = {
//     name: "Raja",
//     marks: 96,
//     prop: this, //global scope (window)
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);  //Parent's scope
//         return this.marks;
//     },
//     getInfo1: function () {
//         setTimeout(() => {
//             console.log(this);  //student
//         }, 2000);
//     },
//     getInfo2: function () {
//         setTimeout(function () {
//             console.log(this);  //Window
//         }, 2000);
//     }
// };
// const a = 5; //global scope
// console.log(a);
// console.log(student);
// console.log(student.getName());
// console.log(student.getMarks());  //Not work for Arrow Function
// console.log(student.getInfo1());
// console.log(student.getInfo2());  
// ... ... ... ... ... ... ... ... ... ... ... ... ...

//** Practice Quetions **
//Write an arrow function that returns the squre of a number 'n'
// const squre = (n) => (n * n);
// console.log(squre(6));

//Write a function that prints "Hellow World" 5 times at intervals of 2s each.
// let id = setInterval( () => {
//     console.log("Finally, red color shines after 17 years");
// }, 2000);

// setTimeout( () => {
//     clearInterval(id);
//     console.log("clear interval ran");
// }, 10000);
// ... ... ... ... ... ... ... ... ... ... ... ...  ...


//**** Array Methods ****

//** forEach method **
// let arr = [1, 2, 3, 4, 5,];
// let print = function (el) {
//     console.log(el);
// };
// arr.forEach(print);  //OR

// arr.forEach(function (el) {
//     console.log(el);
// });  //or

// arr.forEach((el) => {
//     console.log(el);
// });

// let arr = [
//     {
//         name: "Virat",
//         runs:973,
//     },
//     {
//         name: "Rajat",
//         runs:456,
//     },
//     {
//         name: "Salt",
//         runs: 434,
//     },
// ];
// arr.forEach((player) => {
//     console.log(player.runs);
// });
// ... ... ... ... ... ... ... ... ... ... ... ...  ...

//** Map function **
// let num = [1, 2, 3, 4];
// let double = num.map(function(el) {
//     return el*2;
// });
// console.log(double);  //OR

// let double = num.map( (el) => {
//     return el*2;
// });
// console.log(double);

// let double = num.map( (el) => {
// });
// console.log(double);

// let student = [
//     {
//         name: "Viraj",
//         marks:973,
//     },
//     {
//         name: "Rajat",
//         marks:456,
//     },
//     {
//         name: "Salt",
//         marks: 434,
//     },
// ];
// let gpa = student.map((el) => {
//     return el.marks / 10;
// });
// console.log(gpa);
// ... ... ... ... ... ... ... ... ... ... ... ...  ...
