Hari Ke-8 – Javascript – Asynchronous
Berkenalan dengan callback dan promise untuk mengatasi asynchronous di Javascript.

Di dalam dunia pemrograman terdapat dua cara dalam menjalankan program: Synchronous dan Asynchronous. Synchronous artinya program berjalan secara berurutan sedangkan Asynchronous artinya program berjalan bersama-sama.

Terkadang di dalam program yang kita buat terdapat suatu sintaks yang mengharuskan code pada baris tersebut untuk dijalankan terlebih dahulu sebelum menjalankan sintaks pada baris selanjutnya. Hal ini dikenal dengan istilah blocking. Sebaliknya non-blocking artinya program berjalan dengan mengeksekusi sintaks dari baris ke baris secara paralel (bersama-sama) .


Perhatikan contoh program di bawah ini:

setTimeout(function() {
  console.log("saya dijalankan belakangan")
}, 3000)
 
console.log("saya dijalankan pertama") 
Jika kita jalankan program di atas, maka yang akan tampil terlebih dahulu di console adalah “saya dijalankan pertama” walaupun sintaksnya ditulis belakangan setelah function setTimeout. Function setTimeout di atas merupakan salah satu contoh function asynchronous di Javascript.

Cara untuk mengatasi Asynchronous seperti function setTimeout adalah dengan Callback atau dengan Promise.

Callback 
Membuat Callback 
Callback adalah function yang dipanggil ketika function lain selesai menjalankan programnya. Contoh sederhana Callback adalah pada function setTimeout di atas. function setTimeout menerima dua parameter yaitu callback dan waktu tunggu (timeout). function tersebut menjalankan timeout terlebih dahulu lalu ketika waktu yang diset sudah dilewati maka function callback akan dipanggil.

Contoh untuk membuat callback seperti berikut:

// Deklarasi function yang memilik callback sebagai parameter
function periksaDokter(nomerAntri, callback) {
    if(nomerAntri > 50 ) {
        callback(false)
    } else if(nomerAntri < 10) {
        callback(true)
    }    
} 
Misalkan kita ingin periksa ke dokter yang antriannya sering panjang dan memakai nomer antri melalui pemesanan online. Setelah registrasi online lalu kita melakukan pemesanan dan menunggu nomer antrian. Function di atas menerima parameter nomer antri dan sebuah callback. Dilakukan pengecekan kondisi jika nomor antriannya lebih dari 50 maka lebih baik jalan-jalan dulu daripada menunggu, tapi jika nomor antriannya kurang dari 10 tentunya kita harus standby lagi di klinik untuk dipanggil.

Menjalankan Callback
Setelah dideklarasi function yang memiliki callback, kini kita jalankan function tersebut.

// Menjalankan function periksaDokter yang sebelumnya sudah dideklarasi
periksaDokter(65, function(check) {
    if(check) {
        console.log("sebentar lagi giliran saya")
    } else {
        console.log("saya jalan-jalan dulu")
    }
}) 
Karena kita tidak ingin menunggu maka kita gunakan callback untuk mengecek apakah nomer antriannya masih lama atau tidak. Jadi ketika dicek ternyata nomer antriannya masih lama maka hasil return (callback) dari function periksaDokter bernilai false (check = false), sebaliknya jika sudah sebentar lagi akan diberikan callback dengan nilai true (check = true) .

Ketika menjalankan function periksaDokter, diberikan parameter pertama yaitu nomer antrian 65 dan parameter kedua adalah sebuah deklarasi function yang merupakan callback. Seperti sudah dideklarasikan di periksaDokter bahwa callback dipanggil dengan satu parameter bernilai boolean.

Promise 
Sesuai dengan namanya, Promise berarti janji. Seperti janji yang biasanya memakan waktu dan janji bisa ditepati (resolve) atau diingkari (reject). Misalkan pada contoh di bawah ini seorang anak dijanjikan mendapatkan sebuah handphone baru oleh Ibunya. Jika Ibunya sedang bahagia maka janji sebuah handphone baru ditepati, selain itu jika ibunya sedang marah maka janji diingkari.

Membuat Promise
Cara membuat promise adalah dengan menginstance sebuah class Promise. class Promise tersebut sudah disediakan di Javascript. Parameter yang dikirim ketika melakukan instance class Promise yaitu sebuah function yang menerima dua parameter yaitu resolve dan reject.

var isMomHappy = false;
 
// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled atau janji dipenuhi
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject (ingkar)
        }
 
    }
); 
Menjalankan Promise 
Menjalankan promise seperti kita menagih janji yang sudah dibuat.

function askMom() {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
}
 
// Tanya Mom untuk menagih janji
askMom() 
Untuk menagih janji dibuat sebuah function dengan nama askMom yang isinya adalah menagih janji willIGetNewPhone. Ketika anak menagih janji menggunakan function askMom() maka promise willIGetNewPhone dipanggil dan terdapat dua methods yaitu then dan catch . Method .then() dan .catch() keduanya menerima parameter function. Resolve yang dijalankan di pendeklarasian promise akan mengirim handphone baru dan ditangkap di method .then(). Sedangkan reject pada pendeklarasian promise akan mengirim pesan error atau alasan kenapa janji diingkari dan ditangkap di method .catch().

Updated on September 2, 2020

https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-2-materi/hari-ke-8-javascript-asynchronous/