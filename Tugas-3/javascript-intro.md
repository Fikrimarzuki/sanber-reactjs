Hari Ke-3 – Javascript – Intro
Javascript merupakan salah satu bahasa pemrograman yang terpopuler di dunia. Javascript membuat aplikasi web menjadi interaktif tanpa reload halaman. Hampir semua browser modern yang kita ketahui dapat menjalankan javascript agar website yang ditampilkan lebih menarik.

Menjalankan Javascript 
Ada bermacam cara untuk menjalankan kode javascript yang kita buat, di antaranya:

Menjalankan javascript di console browser
Menjalankan javascript di tools online seperti jsbin.com
Menjalankan javascript dengan nodejs
Pada materi ini kita akan mencoba untuk menjalankan script dengan nodejs.

Nodejs adalah software berbasis pemrograman javascript yang dijalankan di sisi server. Jika biasanya javascript kita kenal erat kaitannya dengan client/browser tapi dengan nodejs ini kita bisa membangun server menggunakan bahasa javascript.

Install Nodejs
Pertama-tama tentu kita harus menginstall terlebih dahulu nodejs di komputer kita. Berikut ini link untuk download nodejs (disarankan memilih versi LTS). Untuk OS Windows dan macOs tinggal diikuti saja instalasinya sampai selesai, sedangkan untuk Ubuntu 18.04 kamu bisa install mengikuti tutorial dari digitalocean.

https://blog.sanbercode.com/wp-content/uploads/2020/07/image-42.png

Untuk mengecek apakah instalasi nodejs sudah berhasil kita bisa jalankan script di terminal kita:


dengan perintah tersebut, diketahui saat ini terinstall node dengan versi 12.16.2 dan npm versi 6.14.4

Hello world 
Untuk menjalankan javascript dengan nodejs mari kita coba dengan menuliskan script di sebuah file index.js .

Buatlah file dengan nama index.js kemudian tulis code di dalam file tersebut seperti berikut:

var sayHello = "Hello World!" 
console.log(sayHello)
kemudian simpan file tersebut (save). Setelah itu kita bisa menjalankan script pada index.js tersebut dengan memberikan perintah seperti berikut pada terminal:

$ node index.js
secara otomatis pada terminal kita akan muncul “Hello World!” . (Selamat Anda telah berhasil menjalankan program pertama Anda 😁)

Demikian cara untuk menjalankan Javascript dengan nodejs.

Variable
Variable adalah suatu blok data atau wadah untuk menampung sekumpulan data dengan berbagai tipe data apapun. Dengan variable kita bisa menyimpan suatu nilai untuk kemudian kita olah kembali pada program kita. Untuk deklarasi variable dalam javascript kita bisa gunakan sintaks var lalu diikuti nama variablenya.

var name = "John" // Tipe
var angka = 12
var todayIsFriday = false 

console.log(name) // "John"
console.log(angka) // 12
console.log(todayIsFriday) // false
Waspadai pendeklarasian variable yang tidak bernilai !

var items
console.log(items) // Undefined
Data Type 
Data Type atau dalam bahasa indonesia Tipe Data adalah sekumpulan informasi yang memiliki nilai dan karakteristik tertentu. Beberapa contoh tipe data pada javascript di antaranya:

Number : tipe data angka
String : tipe data berupa text atau kumpulan karakter, biasanya string dibungkus dalam tanda petik ganda (double quote) atau tanda petik tunggal (single quote).
Boolean: tipe data dengan nilai true atau false
String
String adalah tipe data yang berisi karakter-karakter dibungkus dalam tanda petik ("" atau '' ). Karakter-karakter pada suatu string dapat diakses dengan menggunakan indeks atau posisi karakter berada. Indeks pada string selalu mulai dari 0.

var sentences = "Javascript" 
console.log(sentences[0]) // "J"
console.log(sentences[2]) // "v"
String pada javascript juga memiliki property dan methods tertentu. Property dan methods tersebut bisa kita gunakan dalam memanipulasi data agar sesuai dengan program yang kita inginkan.

String Properties 
.length
mengembalikan panjang atau jumlah karakter pada suatu string.

var word = "Javascript is awesome"
console.log(word.length) // 21 
String Methods
.charAt([indeks])

Mengembalikan karakter pada indeks yang diinginkan

console.log('i am a string'.charAt(3)); // 'm'
.concat([string])

Menggabungkan beberapa string dan mengembalikannya menjadi string baru.

var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck
.indexOf([string/karakter])

Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.

var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1
.substring([indeks awal], [indeks akhir (optional)])

Mengembalikan potongan string mulai dari indeks pada parameter pertama (indeks awal) sampai dengan indeks pada parameter kedua (indeks akhir). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

var car1 = 'Lykan Hypersport';
var car2 = car1.substr(6);
console.log(car2); // Hypersport
.substr([indeks awal], [jumlah karakter yang diambil (optional)])

Mendapatkan potongan string mulai dari indeks pada parameter pertama (indeks awal) dengan jumlah indeks pada parameter kedua (jumlah karakter). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

var motor1 = 'zelda motor';
var motor2 = motor1.substr(2, 2);
console.log(motor2); // ld
.toUpperCase()

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.

var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU
.toLowerCase()

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kecil

var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(lower); // this letter is for you
.trim()

Mengembalikan string baru yang sudah dihapus karakter whitespace (” “) pada awal dan akhir string tersebut.

var username    = ' administrator ';
var newUsername = username.trim(); 
console.log(newUsername) // 'administrator'
Mengubah tipe data dari dan ke String
Di Javascript terkadang kita ingin mengubah sebuah data string menjadi tipe data lain atau sebaliknya. Contoh diperoleh data angka tapi dalam tipe data String maka kita dapat mengubah string tersebut menjadi tipe data angka.

String([angka/array])

Fungsi global String() dapat dipanggil kapan saja pada program JavaScript dan akan mengembalikan data dalam tipe data String dari parameter yang diberikan.

var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'
.toString()

Mengonversi tipe data lain menjadi string. Bila data tersebut adalah array, setiap nilai akan dituliskan dan dipisah dengan karakter koma.

var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());  // '1,2'
Number([String])

Fungsi global Number() mengonversi tipe data string menjadi angka. Data yang diberikan pada parameter harus berupa karakter angka saja, dengan titik (separator) bila angka adalah bilangan desimal. Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN (Not a Number).

var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN
parseInt([String]) dan parseFloat([String])

Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string. Bila angka adalah bilangan desimal maka gunakan parseFloat(), bila tidak bilangan dibelakang koma akan diabaikan.

var int  = '89';
var real = '56.7';
var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56
var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(int); // strReal_2 = 56.7
Operator
Operator adalah karakter khusus yang merepresentasikan sebuah tindakan. Operator terbagi ke dalam beberapa jenis:

Operator Aritmatika Operator yang melibatkan operasi matematika seperti tambah, kurang, kali, bagi.
Tambah (+)
Kurang (–)
Kali (*)
Bagi (/)
Modulus (%)
Modulus adalah sisa bagi. Contohnya 5%3 hasilnya adalah 2, 100%5 hasilnya 0.
Operator Assignment (=), Operator untuk mendaftarkan atau meng-assign suatu nilai ke dalam suatu variable
var angka 
angka = 10 // Contoh assignment variable angka dengan nilai 10
Operator Perbandingan, Operator yang membandingkan suatu nilai dengan nilai yang lain. Hasil dari perbandingan ini akan dikembalikan dalam tipe data boolean true atau false.
Equal Operator (==)
var angka = 100
console.log(angka == 100) // true
console.log(angka == 20) // false
Not Equal ( != )
var sifat = "rajin"
console.log(sifat != "malas") // true
console.log(sifat != "bandel") //true 
Strict Equal ( === ) Selain membandingkan dua nilai nya, strict equal juga membandingkan tipe datanya apakah sama atau tidak
var angka = 8
console.log(angka == "8") // true, padahal "8" adalah string.
console.log(angka === "8") // false, karena tipe data nya berbeda
console.log(angka === 8) // true 
Strict not Equal ( !== ) Kebalikan dari strict equal.
var angka = 11
console.log(angka != "11") // false, padahal "11" adalah string
console.log(angka !== "11") // true, karena tipe datanya berbeda
console.log(angka !== 11) // false
Kurang dari & Lebih Dari ( <, >, <=, >=)
var number = 17
console.log( number < 20 ) // true
console.log( number > 17 ) // false
console.log( number >= 17 ) // true, karena terdapat sama dengan
console.log( number <= 20 ) // true
Operator Kondisional, Operator yang mengkombinasikan dua nilai kebenaran . Terdapat operator AND (&&) dan OR (||)
OR ( || )
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false
AND ( && )
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true 
Referensi



JavaScript Variables By W3School: https://www.w3schools.com/js/js_variables.asp
JavaScript Operator By W3School: https://www.w3schools.com/js/js_operators.asp
String by Mozilla Developer Network: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
JavaScript String Reference by W3School: http://www.w3schools.com/jsref/jsref_obj_string.asp
JavaScript Type Conversion: http://www.w3schools.com/js/js_type_conversion.asp
github hacktiv8 phase 0 materials: https://github.com/hacktiv8/phase-0-activities/blob/master/modules/js-string-reference.md#length

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-1-materi/hari-ke-3-javascript-intro/

