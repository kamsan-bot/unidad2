function showmessages() {
    console.log("aqui llamamos a la funcion");
    console.log("aqui inician los mensajitos");
    console.log("holaholaaaa");
    console.log(true);
    console.log(10);
    console.log("hay 10 perritos");
    console.log("tambien hay 10 gatitos");
}

showmessages(5);

let name = prompt("ingresa tu apellido");
console.log(`el nombre que ingresaste fue ${name}`)

function addTwoNumbers(a, b) {
    let result = a + b;
    let message = `${a} + ${b} = ${result}`;

     return message;
}

let multiplyTwoNumbers = (a, b) => {
    let result = a*b;
    let message = `result: $(result)`;

    return message;
}

let num1 = parseInt(prompt("ingresa el resultado"));
let num2 = parseInt(prompt("ingresa el resultado"));

let result = multiplyTwoNumbers(num1, num2);

console.log(result);




