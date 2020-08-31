// Soal 1

function halo() {
  return "Halo Sanbers!";
}
console.log(halo(), "\n");


// Soal 2

function kalikan(num1, num2) {
  return num1 * num2;
}

var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);

console.log(hasilKali, "\n");


// Soal 3

function introduce(name, age, address, hobby) {
  const kalimat = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
  return kalimat;
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan , "\n");


// Soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];

var objectDaftarPeserta = {};
objectDaftarPeserta.nama = arrayDaftarPeserta[0];
objectDaftarPeserta["jenis kelamin"] = arrayDaftarPeserta[1];
objectDaftarPeserta.hobby = arrayDaftarPeserta[2];
objectDaftarPeserta["tahun lahir"] = arrayDaftarPeserta[3];

console.log(objectDaftarPeserta, "\n");


// Soal 5

let obj = [
  {
    nama: "strawberry",
    warna: "merah",
    "ada bijinya": "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    "ada bijinya": "ada",
    harga: 8000
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    "ada bijinya": "tidak",
    harga: 5000
  }
]

console.log(obj[0], "\n");


// Soal 6


function addFilm(array, nama, durasi, genre, tahun) {
  let obj = { nama, durasi, genre, tahun };
  array.push(obj);
  return array;
}
var dataFilm = []

addFilm(dataFilm, "1917", "120 minute", "war/drama", "2019");

console.log(dataFilm, "\n");

