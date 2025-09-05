let personaje = {
    nombre: "kenny",
    apellido: "sanchez",
    edad: 14,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["edad"]);

personaje.hobbies = ["jugar", "bailar", "dibujar"];

console.log(personaje.hobbies);

let personaje2 = { ...personaje };

personaje2.nombre = "katt";
personaje2.edad = 18;
console.log("PERSONAJE 2");
console.log(personaje2);

console.log("personaje 1");
console.log("personaje");

let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
console.log(heroes.members[1].name);
console.log(heroes.members[1].powers);
console.log(heroes.members[2].powers[4]);

