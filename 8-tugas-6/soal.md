Tugas 6 – Javascript ES6
Petunjuk Pengerjaan
Ikutilah langkah-langkah pengerjaan di bawah ini:‌

1. Menambahkan Folder Baru dan file baru
Buat folder baru dengan nama “Tugas-6” dan buatlah file tugas6.js

2. Kerjakan Soal di bawah ini
kerjakan soal di bawah ini di dalam file tugas6.js

Soal 1
buatlah fungsi menggunakan arrow function luas lingkaran dan keliling lingkaran dengan arrow function lalu gunakan let dan const di dalam soal ini

Soal 2
buatlah variable seperti di bawah ini:

let kalimat = ""
buatlah fungsi menambahkan kata di kalimat dan gunakan penambahan kata tersebut dengan template literal, berikut ini kata kata yang mesti di tambahkan

saya
adalah
seorang
frontend
developer
Soal 3
return dalam fungsi di bawah ini masih menggunakan object literal dalam ES5, ubahlah menjadi bentuk yang lebih sederhana di ES6.

const newFunction = function literal(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName() 
Soal 4
Diberikan sebuah objek sebagai berikut:

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:

const firstName = newObject.firstName;
const lastName = newObject.lastName;
const destination = newObject.destination;
const occupation = newObject.occupation;
Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)

// Driver code
console.log(firstName, lastName, destination, occupation)
soal 5
Kombinasikan dua array berikut menggunakan array spreading ES6

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = west.concat(east)
//Driver Code
console.log(combined)
3. Tips
Agar soal mudah di periksa trainer maka sebelum jawaban soal sisipkan komentar seperti di bawah ini

// soal 1
.... jawaban soal 1

// soal 2
.... jawaban soal 2

dan seterusnya
Updated on Agustus 31, 2020