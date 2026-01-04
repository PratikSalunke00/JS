//**** Call Stack ****
function hello() {
    console.log("calling hello fnx")
    console.log("hello");
}

function demo() {
    hello();
}

console.log("calling demo fnx")
demo();
console.log("done , bye")
