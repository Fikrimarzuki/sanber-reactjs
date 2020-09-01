Hari Ke-7 – Javascript – Class
Belajar mengenai Class dan penggunaannya di Javascript.

Pada materi sebelumnya, telah dipelajari tentang Object Literals di Javascript. Dengan Object kita dapat merepresentasikan segala hal termasuk program yang akan kita buat dengan Javascript. Materi kali ini akan mempelajari object dalam bentuk Class.

Di dalam dunia pemrograman dikenal sebuah konsep dengan nama OOP atau Object Oriented Programming. Secara sederhana, dengan konsep OOP maka segala sesuatu dapat kita anggap sebagai sebuah Object atau cetakan (Blueprint). Contohnya terdapat Object Class bernama “Car” yang berarti mobil. Suatu (cetakan) mobil biasanya memiliki nama dan dibuat oleh sebuah pabrikan otomotif (factory). Selain itu mobil dapat memiliki fungsi untuk berjalan, mengerem, membunyikan klakson, dll.

Mendefinisikan Sebuah Class 
Class sebetulnya adalah sebuah functions yang spesial, dan seperti function yang kita ketahui sebelumnya bahwa functions dapat dideklarasikan dan dipanggil begitu pula dengan Class.

Deklarasi Class
Cara yang pertama untuk membuat sebuah class yaitu dengan mendeklarasikannya. Caranya adalah tuliskan “Class” diikuti dengan nama class-nya.

class Car {
    constructor(brand,factory) {
        this.brand = brand
        this.factory = factory
        this.sound = "honk! honk!vroomvroom"
    }
}
Ekspresi Class
Cara lain untuk membuat sebuah class yaitu dengan cara membuat sebuah variabel. Class tersebut boleh diberikan nama atau tidak diberi nama. contohnya sebagai berikut:

// Tidak diberi nama 
var Car = class {
    constructor(brand, factory) {
        this.brand = brand
        this.factory = factory
    }
}
 
console.log(Car.name) // Car
 
// Diberi nama
var Car = class Car2 {
    constructor(brand, factory) {
        this.brand = brand
        this.factory = factory
    }
}
console.log(Car.name) // Car2
Nama sebuah Class biasanya menggunakan kapital pada huruf pertama nya. Jika terdapat dua kata atau lebih maka huruf pertama pada kata yang selanjutnya harus kapital.

class Car{} // BENAR
class car{} // SALAH
class SportsCar {} // BENAR
class sportscar {} // SALAH 
Method
Sintaks constructor pada class merupakan method khusus, dimana dilakukan inisialisasi properties, yang akan dieksekusi secara otomatis ketika class dibuat, dan ia harus memiliki nama “constructor”. (Jika tidak dituliskan, maka Javascript akan menambahkan method constructor kosong secara otomatis).

Kita juga dapat membuat method sendiri, dengan sintaks yang sudah biasa kita gunakan:

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

mycar = new Car("Ford");
console.log(mycar.present()) // I have a Ford
Seperti yang terlihat pada contoh di atas, method dapat digunakan dengan cara memanggil nama class dan method nya ditambah dengan kurung buka dan kurung tutup. Parameter bisa dimasukan di dalam tanda kurung jika diperlukan, seperti pada contoh di bawah.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present(x) {
    return x + ", I have a " + this.carname;
  }
}

mycar = new Car("Ford");
console.log(mycar.present("Hello"));
Static Method
Static methods didefinisikan hanya untuk class itu sendiri. sehingga, jika melihat pada contoh sebelumnya static method hanya bisa diakses melalui Car, dan tidak bisa melalui mycar:

 class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    return "Hello!!";
  }
}

mycar = new Car("Ford");

// memanggil 'hello()' pada class Car:
console.log(Car.hello());

// dan tidak bisa pada 'mycar':
// console.log(mycar.hello());
// jika menggunakan sintaks tersebut akan memunculkan error.
Inheritance
Untuk membuat inheritance dari suatu class, gunakan keyword extends. Class yang dibuat dengan metode inheritance, akan memiliki method yang sama dengan class asalnya. Contoh berikut adalah class Model yang merupakan inheritance dari class Car:

 class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
console.log(mycar.show());
Method super() mengacu pada class asalnya, dimana dengan menggunakan method super()  di dalam method constructor, kita dapat memanggil constructor class asalnya dan mengakses property dan method nya.

Getters dan Setters
Pada class juga kita dapat menggunakan getter dan setter. getter dan setter dapat digunakan untuk melakukan proses tertentu pada suatu property, sebelum property tersebut digunakan. Untuk menambahak getter dan setter pada class, gunakan keyword get dan set. (Meskipun getter merupakan sebuah method, namun dalam menggunakannya tidak digunakan “( )” setelah memanggil method tersebut, seperti pada contoh di bawah).

 class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

mycar = new Car("Ford");
console.log(mycar.cnam); // Ford
// getter cnam digunakan tanpa "()"
Biasanya untuk membedakan method dengan property, property ditulis dengan menggunakan “_” di depan namanya, sementara method (termasuk getter dan setter) tidak.

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

mycar = new Car("Ford");
mycar.carname = "Volvo"; // memanggil setter, mengubah Ford menjadi Volvo
console.log(mycar.carname); // Volvo
sumber: w3schools.com

Updated on September 1, 2020

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-2-materi/hari-ke-7-javascript-class/

