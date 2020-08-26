// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var soalPertama = `${kataPertama} ${kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)} ${kataKetiga} ${kataKeempat.toUpperCase()}`

console.log(`Jawaban soal pertama:\n${soalPertama}\n`);

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var soalKedua = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat)

console.log(`Jawaban soal kedua: \n${soalKedua} - ${typeof(soalKedua)}\n`);

// Soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log("Jawaban soal ketiga:")
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
console.log("");

// Soal 4

var nilai = 75;
let indeks;

if (nilai >= 80) {
  indeks = "A"
} else if (nilai >= 70 && nilai < 80) {
  indeks = "B"
} else if (nilai >= 60 && nilai < 70) {
  indeks = "C"
} else if (nilai >= 50 && nilai < 60) {
  indeks = "D"
} else {
  indeks = "E"
}

console.log(`Jawaban soal keempat:\n${indeks}\n`);

// Soal 5

var tanggal = 27;
var bulan = 8;
var tahun = 1993;

switch(bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
    bulan = null;
    break;
}

console.log("Jawaban soal kelima:")
if (bulan) {
  console.log(`${tanggal} ${bulan} ${tahun}`)
} else {
  console.log("error, your input is not valid")
}
