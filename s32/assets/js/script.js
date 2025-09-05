class Person {
    #cellphone;
    constructor(firstName,lastName, age, height, weight, cellphone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.#cellphone = cellphone;
    }

    sayHello() {
        console.log("holaa, saludo a todas")
    }

    introduce() {
        return `hola, me llamo ${this.firstName} ${this.lastName} tengo ${this.age} años.`;
    }

    getCellphone() {
        return this.#cellphone;
    }
}

let person1 = new Person("kinse", "dasilva", 17, 1.85, 68, "987675347");

console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);
console.log(person1.weight);

console.log("METODOS");
person1.sayHello();
console.log(person1.introduce());
console.log(person1.getCellphone());

console.log("HERENCIA");
class Chef extends Person {
    constructor(
        firstName,
        lastName, 
        age, 
        height, 
        weight, 
        cellphone,
        restaurant,
        favoriteFood
    ) {
      super(firstName,lastName, age, height, weight, cellphone);
      this.restaurant = restaurant;
      this.favoriteFood = favoriteFood;
    }
}