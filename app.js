//**** Call Stack ****
// function hello() {
//     console.log("calling hello fnx")
//     console.log("hello");
// }

// function demo() {
//     hello();
// }

// console.log("calling demo fnx")
// demo();
// console.log("done , bye")
// ... ... ... ... ... ... ... ... ... ... ... ...  ...


//**** Vidualization of Call Stack ****
// function one() {
//     return 1;
// }   

// function two() {
//     return one() + one()    ;
// }

// function three() {
//     let ans=  two() + one();
//     console.log(ans);
// }
// three();
// ... ... ... ... ... ... ... ... ... ... ... ...  ...


//**** Breakpoint Visualization ****

//**** JS is Single Threaded Language ****                                                             


//**** Callbacks Hell and Asynchronous JS ****

// h1 = document.querySelector("h1");
// // setTimeout(() => {      
// // h1.style.color = "red";
// // } , 1000);

// // setTimeout(() => {      
// // h1.style.color = "green";
// // } , 2000);

// // setTimeout(() => {      
// // h1.style.color = "yellow";
// // } , 3000);

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("yellow", 1000);
//     });
// });
// ... ... ... ... ... ... ... ... ... ... ... ...  ...


// //**** Promises and Chaining ****
// function saveToDatabase(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1; // 1 to 10
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDatabase("my data",
//     () => {
//         console.log("success: data saved successfully");
//         saveToDatabase("my more data",
//             () => {
//                 console.log("success2: more data saved successfully")
//                 saveToDatabase("my even more data",
//                     () => { console.log("success3: even more data saved successfully") },
//                     () => { console.log("failure3: even more data saving failed , try again later") }
//                 );
//             },
//             () => { console.log("failure2: more data saving failed , try again later") }
//         );
//     },

//     () => { console.log("failure: data saving failed , try again later") }
// );
// ... ... ... ... ... ... ... ... ... ... ... ...  ...
