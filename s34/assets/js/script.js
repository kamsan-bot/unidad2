let fruits = ["melocoton", "naranja", "maracuya", "sandia"];
console.log(fruits);

console.log("push");

fruits.push("chirimoya");
console.log("fruits");

console.log("pop");

fruits.pop();
console.log(fruits);

console.log("shift");

let deletedItem = fruits.shift();
console.log(`elemento eliminado con shift: ${deletedItem}`);
console.log(fruits);

console.log("includes")
console.log(fruits.includes("naranja"));
console.log(fruits.includes("fresa"));

console.log("indexOf");
console.log(fruits.indexOf("naranja"));
console.log(fruits.indexOf("fresa"));

console.log("join");
console.log(fruits.join());
console.log(fruits.join("."));
console.log(fruits.join("-"));
console.log(fruits.join("_"));
console.log(fruits.join(" "));
console.log(fruits.join(""));

