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
console.log("==========");
fruits = ["melocoton", "naranja", "maracuya", "sandia", "chirimoya"];
console.log(fruits);

console.log("slice");
console.log(fruits.slice(2));
console.log(fruits.slice(2, 4));

fruits.splice(2,2);
console.log(fruits);

fruits.splice(2, 2, "pera", "platano", "chocomango", "palta");
console.log(fruits);

console.log("==========");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("map");
let numsMap = nums.map((x) => x + 5);
console.log(numsMap);

console.log(nums.map((x) => x * 16));
console.log(nums.map((x) => `numero ${x}`));

console.log("filter");
let filteredNums = nums.filter((x) => x > 3);
console.log(filteredNums);

console.log(nums.filter((x) => x < 5));

console.log(nums.filter((x) => x % 2 === 0));

console.log("reduce");
console.log(nums.reduce((a,b) => a + b, 0));

console.log(nums.reduce((a,b) => a * b, 1));
console.log("=========");

