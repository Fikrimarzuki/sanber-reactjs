Hari Ke-5 – Javascript – Object
Mempelajari tipe data Object pada Javascript

Object adalah kumpulan data tidak berurut yang berisikan pasangan property (key) dan value . Jika kita ingat pada tipe data Array yang merupakan kumpulan data yang berurut sesuai indeks, sedangkan Object mirip dengan Array tapi kini kita memberikan property atau key sendiri .
Property atau key pada Object itu dapat kita umpamakan indeks pada Array. Bedanya indeks pada Array langsung diberikan secara otomatis mulai dari indeks 0 dst, sedangkan property pada Object dapat kita namai sesuka kita.

Bandingkan kedua variable berikut:

var personArr = ["John", "Doe", "male", 27]
var personObj = {
    firstName : "John",
    lastName: "Doe",
    gender: "male",
    age: 27
} 
contoh di atas kita ingin mendeklarasikan variable person dalam Array dan Object. Jika pada Array kita mengakses nama depan dengan cara personArr[0] , sedangkan jika kita ingin mengakses nama depan pada Object kita dapat melakukannya dengan personObj.firstName . Keduanya memberikan value yang sama namun pemanggilan value dengan cara Object lebih kita senangi karena kita bisa mendefinisikan bahwa seseorang “Person” itu pasti memiliki nama depan (firstName), nama belakang (lastName), (gender), dan umur (age).

var personArr = ["John", "Doe", "male", 27]
var personObj = {
    firstName : "John",
    lastName: "Doe",
    gender: "male",
    age: 27
}
 
console.log(personArr[0]) // John
console.log(personObj.firstName) // John 
Deklarasi Object 
Cara untuk mendeklarasi sebuah object yaitu dengan memberikan curly brackets ({}) lalu buat pasangan key: value di dalamnya. Jika ingin menambahkan pasangan key dan value maka dipisah dengan tanda koma. contohnya:

var object = {
    [key]: [value]
}
 
var car = {
    brand: "Ferrari",
    type: "Sports Car",
    price: 50000000
    "horse power": 986
}
Jika diperhatikan pada contoh object car di atas terdapat key dengan nama “horse power” yang penulisannya berbeda dengan key yang lain. Hal ini karena jika nama key dari Object lebih dari satu kata atau dipisah dengan spasi kita bisa deklarasikan dengan memberikan tanda petik ("").

Cara lainnya untuk membuat object adalah dengan mendeklarasikan terlebih dahulu variable sebagai Object kosong lalu melakukan assign property dan valuenya ke varible tersebut. Contohnya sebagai berikut:

var car2 = {}
// meng-assign key:value dari object car2
car2.brand = "Lamborghini"
car2.brand = "Sports Car"
car2.price = 100000000 
Jika ingin memberikan nama key yang lebih dari satu kata dan dipisah dengan spasi maka kita dapat menulis key nya dengan menggunakan tanda petik ("") di dalam kurung siku ([]).

car2["horse power"] = 730 
Value yang kita assign pada object tidak terbatas hanya string atau number saja tapi bisa juga Array, boolean, bahkan Object lagi di dalamnya.

Mengakses Nilai pada Object
Untuk mengakses nilai pada Object bisa dengan cara memanggil object nya lalu tanda titik (dot) dan nama property/key nya. contohnya seperti berikut

var motorcycle1 = {    
    brand: "Handa",
    type: "CUB",
    price: 1000
}
console.log(motorcycle1.brand) // "Handa"
console.log(motorcycle1.type) // "CUB"
Cara lain untuk mengakses nilai, yaitu cara yang mirip dengan mengakses nilai suatu elemen pada Array, menggunakan tanda kurung siku, dan di dalam kurung siku tersebut kita sebutkan nama property nya.

console.log(motorcycle1["price"])
Tipe data Array technically adalah sebuah Object tetapi Array memiliki sifat khusus. Array secara otomatis memberikan indeks yang analogi dengan key pada Object. Coba kamu cek di console menggunakan typeof

var array = [ 1, 2, 3 ] 
console.log(typeof array) // object
Array of Object
object bisa termasuk dalam tipe data yang berarti dapat di masukkan ke dalam array, seperti contoh di bawah ini

var mobil = [{merk: "BMW", warna: "merah", tipe: "sedan"}, {merk: "toyota", warna: "hitam", tipe: "box"}, {merk: "audi", warna: "biru", tipe: "sedan"}]
Array Iteration
array iteration merupakan method dalam array untuk melakukan perulangan data dari array, method array iteration ada banyak tapi untuk basic kita hanya perlu menggunakan 3 method ini yaitu forEach(), map() dan filter()

.foreach()
foreach method untuk array berfungsi untuk perulangan data dari array, misal kita punya array seperti di bawah ini:

var mobil = [{merk: "BMW", warna: "merah", tipe: "sedan"}, {merk: "toyota", warna: "hitam", tipe: "box"}, {merk: "audi", warna: "biru", tipe: "sedan"}]
lalu kita gunakan foreach seperti di bawah ini

mobil.forEach(function(item){
   console.log("warna : " + item.warna)
})
maka akan muncul tampilan seperti di bawah ini


.map()
map method untuk array berfungsi untuk membuat array baru. misal dengan var mobil diatas kita buat kode seperti di bawah ini

var arrayWarna = mobil.map(function(item){
   return item.warna
})

console.debug(arrayWarna)
maka akan muncul tampilan seperti di bawah ini:


.filter()
filter method untuk array berfungsi untuk memnyaring data yang diinginkan. misal dengan var mobil diatas kita buat kode seperti di bawah ini

var arrayMobilFilter = mobil.filter(function(item){
   return item.tipe != "sedan";
})

console.debug(arrayMobilFilter)
maka akan muncul tampilan seperti di bawah ini:


Updated on Agustus 28, 2020

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-1-materi/hari-ke-5-javascript-object/