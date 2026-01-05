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


// //**** Promises  ****
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


//**** Promises and Chaining - Improved ****
// function saveToDatabase(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1; // 1 to 10
//         if (internetSpeed > 4) {
//             resolve("data saved successfully");
//         } else {
//             reject("data saving failed , try again later");
//         }

//     })
// }

// saveToDatabase("my data");
// ... ... ... ... ... ... ... ... ... ... ... ...  ...


//**** then() & catch() ****
// function saveToDatabase(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1; // 1 to 10
//         if (internetSpeed > 4) {
//             resolve("data saved successfully");
//         } else {
//             reject("data saving failed , try again later");
//         }

//     })
// }

// let request = saveToDatabase("my data");
// request.then(() => {
//     console.log("data saved successfully");
//     console.log(request);
// })
// .catch(() => {
// console.log("data saving failed , try again later");
// console.log(request);
// });
// ... ... ... ... ... ... ... ... ... ... ... ...  ....


//**** Async Await ****
// async function greet() {
//     throw "An error occurred";
//     return "hello world";
// }

// greet()
// .then((result)=>{
//     console.log("greeted successfully");
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("greeting failed");
//     console.log(err);
// });

// let demo = async () => {
//     return 5;
// };
// ... ... ... ... ... ... ... ... ... ... ... ...  ....


//**** Async Await ***** 
// // function getNumber() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             let num = Math.floor(Math.random() * 10) + 1; // 1 to 10
// //             console.log(num);
// //             resolve();
// //         }, 1000);
// //     });
// // }

// // async function demo() {
// //     await getNumber();
// //     await getNumber();  
// //     await getNumber();
// //     console.log("done");
// // }

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve();
//         }, delay);
//     }); 
// }
// async function changeColors() {
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("orange", 1000);
// }

// ... ... ... ... ... ... ... ... ... ... ... ...  ....


 // Handling Rejection in Async Await ****
// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1; // 1 to 5
//             if (num > 3) {
//                 reject("Error: Unable to change color to " + color);
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`)
//             resolve("color changed to " + color);
//         }, delay);
//     }); 
// }
// async function changeColors() {
//     try {       
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("orange", 1000);
//     } catch (err) {
//         console.log(err);
//     }
// }
// ... ... ... ... ... ... ... ... ... ... ... ...  ....


//**** JSON and API Calls ****

// JSON data to JSON Object conversion
// let jsonRes = `{
//     "name": "John Doe",
//     "age": 30,
//     "city": "New York"
// }`;

// let validJson = JSON.parse(jsonRes);
// console.log(validJson);
// console.log(validJson.name);

// // JSON Object to JSON data conversion
// let jsonObj = {
//     name: "Jane Doe",
//     age: 25,
//     city: "Los Angeles"
// };

// let jsonData = JSON.stringify(jsonObj);
// console.log(jsonData);
// console.log(typeof jsonData);
// ... ... ... ... ... ... ... ... ... ... ... ...  ....        


//**** Fetch API ****
// let url = "https://catfact.ninja/fact";   
// fetch(url)
//     .then( (response) => {
//         return response.json();
//     })
//     .then( (data) => {
//         console.log(data);
//         let fact = data.fact;
//         console.log(fact);
//         let p = document.querySelector("p");
//         p.innerText = fact;
//     })
//     .catch( (error) => {
//         console.log("error is:", error);
//     });
// ... ... ... ... ... ... ... ... ... ... ... ...  ....


//**** Fetch API with Async Await ****
// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//          let res = await fetch(url);
//             let data =  await res.json();
//             console.log(data.fact);
//     } catch (error) {
//         console.log("error is:", error);
//     }
// }

// getFacts();
// ... ... ... ... ... ... ... ... ... ... ... ...  ....

//**** Axios Library ****
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//          let res = await axios.get(url);
//             return(res.data.fact);
//     } catch (error) {
//         console.log("error is:", error);
//         return "Error fetching fact";
//     }
// }

// getFacts();
// ... ... ... ... ... ... ... ... ... ... ... ...  ....


//**** Axios Library - Dog API ****

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let imageUrl = await getImage();
//     console.log(imageUrl);
//     let img = document.querySelector("#result");
//     img.setAttribute("src" , imageUrl);
// });

// async function getImage() {
//     try {
//          let res = await axios.get(url2);
//          return res.data.message;
//     } catch (error) {
//         console.log("error is:", error);
//         return "Error fetching image";
//     }
// }

// getImage();
// ... ... ... ... ... ... ... ... ... ... ... ...  ....


//**** Axios Library - Sending Header ****

// const url = "https://icanhazdadjoke.com/";

// async function getJoke() {
//     try {
//          let res = await axios.get(url, {
//             headers: {
//                 Accept: "application/json"
//             }
//          });    
//          console.log(res.data.joke);
//     } catch (error) {
//         console.log("error is:", error);
//     }       
// }

// getJoke();
// ... ... ... ... ... ... ... ... ... ... ... ...  ....