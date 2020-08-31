// Soal 1

const luasLingkaran = radius => 3.14 * radius * radius;
let kelilingLingkaran = radius => 2 * 3.14 * radius;

console.log(luasLingkaran(14));
console.log(kelilingLingkaran(14));


// Soal 2

let kalimat = "";

kalimat += `saya adalah seorang frontend developer`;
console.log(kalimat);


// Soal 3

const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => console.log(`${firstName} ${lastName}`)
  }
};

newFunction("William", "Imoh").fullName();


// Soal 4

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
};

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation, spell);


// Soal 5

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);
