// Soal 1

let i = 0;
let loop = 1;

while(true) {
  if(i === 0 && loop === 1) console.log("LOOPING PERTAMA");
  if(i > 20) {
    console.log("LOOPING KEDUA");
    loop = 2;
  }

  if(loop === 1) i++
  else i--

  if(loop != 1 && i === 0) break;

  if (i % 2 === 0) {
    if(loop === 1) console.log(i + " - " + "I love coding");
    else 
      console.log(i + " - " + "I will become a frontend developer");
  }
}

/*
OUTPUT

LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become a frontend developer
18 - I will become a frontend developer                                                                              
16 - I will become a frontend developer
14 - I will become a frontend developer
12 - I will become a frontend developer
10 - I will become a frontend developer
8 - I will become a frontend developer
6 - I will become a frontend developer
4 - I will become a frontend developer
2 - I will become a frontend developer
*/

console.log("");


// Soal 2

for(let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " - " + "Berkualitas");
  } else if (i % 2 != 0) {
    if (i % 3 === 0) {
      console.log(i + " - " + "I Love Coding");
    } else {
      console.log(i + " - " + "Santai");
    }
  }
}

/*
OUTPUT

1 - Santai
2 - Berkualitas
3 - I Love Coding 
4 - Berkualitas
5 - Santai
6 - Berkualitas
7 - Santai
8 - Berkualitas
9 - I Love Coding
10 - Berkualitas
11 - Santai
12 - Berkualitas
13 - Santai
14 - Berkualitas
15 - I Love Coding
16 - Berkualitas
17 - Santai
18 - Berkualitas
19 - Santai
20 - Berkualitas
*/

console.log("");

// Soal 3

let dimension = 7;
let str = "";
for(let i = 0; i < dimension; i++) {
  str += "#";
  console.log(str);  
}

/*
OUTPUT

#
##
###
####
#####
######
#######
*/

console.log("");



// Soal 4

var kalimat = "saya sangat senang belajar javascript";
let kata = "";
let array = [];
for(let i = 0; i <= kalimat.length; i++) {
  if (kalimat[i] && kalimat[i] !== " ") {
    kata += kalimat[i];
  } else {
    array.push(kata);
    kata = "";
  }
}
console.log("Menggunakan for loop");
console.log(array);
const data = kalimat.split(" ");
console.log("Menggunakan split function");
console.log(data);

/*
OUTPUT

["saya", "sangat", "senang", "belajar", "javascript"]
*/

console.log("");



// Soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

let j = 0;
let status = true;
while(true) {
  if (status) {
    if(daftarBuah[j][0] > daftarBuah[j+1][0]) {
      let temp = daftarBuah[j];
      daftarBuah[j] = daftarBuah[j+1]
      daftarBuah[j+1] = temp
      j = 0
    } else {
      j++
    }
    if (!daftarBuah[j+1]) {
      j = 0;
      status = false;
      console.log("Menggunakan while loop untuk sort");
    }
  }
  if (!status) {
    console.log(daftarBuah[j]);
    if(!daftarBuah[j+1]) {
      break;
    }
    j++
  }
}

console.log("Menggunakan sort function");
const newDaftarBuah = daftarBuah.sort((a,b) => a - b);
for (let i = 0; i < newDaftarBuah.length; i++) {
  console.log(newDaftarBuah[i]);
}

/*
OUTPUT

1. Mangga
2. Apel
3. Anggur
4. Semangka
5. Jeruk
*/

