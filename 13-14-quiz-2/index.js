// SOAL NOMOR 11
function filterBookPromise(colorful, amountOfPage) {
  return new Promise(function(resolve, reject) {
    var books = [
      { name: "shinchan", totalPage: 50, isColorful: true },
      { name: "Kalkulus", totalPage: 250, isColorful: false },
      { name: "doraemon", totalPage: 40, isColorful: true },
      { name: "algoritma", totalPage: 300, isColorful: false }
    ]
    if (amountOfPage > 0) {
      resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful === colorful))
    } else {
      var reason = new Error("maaf parameter salah")
      reject(reason)
    }
  })
}

filterBookPromise(false, 10)
  .then(books => {
    console.log("buku yang tidak colorful dan mempunyai total halaman lebih dari minimum jumlah halaman adalah")
    console.log(books)
  })
  .catch(err => {
    console.log(err)
  })




// SOAL NOMOR 12
class BangunDatar {
  constructor(nama) {
    this._nama = nama
  }

  get nama() {
    return this._nama
  }

  set nama(value) {
    this._nama = value
  }

  luas() {
    return ""
  }

  keliling() {
    return ""
  }
}

class Lingkaran extends BangunDatar {
  constructor(nama, radius) {
    super(nama)
    this._radius = radius
    this.PI = 3.14
  }

  get radius() {
    return this._radius
  }

  set radius(value) {
    this._radius = radius
  }

  luas() {
    return(`Luas ${this.nama} adalah ${this.PI * this.radius * this.radius}`)
  }

  keliling() {
    return(`Keliling ${this.nama} adalah ${2 * this.PI * this.radius}`)
  }
}

class Persegi extends BangunDatar {
  constructor(nama, sisi) {
    super(nama)
    this._sisi = sisi
  }

  get sisi() {
    return this._sisi
  }

  set sisi(value) {
    this._sisi = sisi
  }

  luas() {
    return(`Luas ${this.nama} adalah ${this.sisi * this.sisi}`)
  }

  keliling() {
    return(`Keliling ${this.nama} persegi adalah ${4 * this.sisi}`)    
  }
}

const persegi = new Persegi("bujur sangkar", 5);
console.log(persegi.luas())
console.log(persegi.keliling())
const lingkaran = new Lingkaran("lingkaran", 7);
console.log(lingkaran.luas())
console.log(lingkaran.keliling())







// SOAL NOMOR 14
const volumeBalok = (...args) => {
  if (args.length === 3) {
    return `volume balok adalah ${args.reduce((el, val) => el * val)}`
  } else {
    return `input salah, volume balok butuh 3 parameter, yaitu panjang, lebar dan tinggi`
  }
}

const volumeKubus = (...args) => {
  if (args.length === 1) {
    return `volume kubus adalah ${Math.pow(args, 3)}`
  } else {
    return `input salah, volume kubus butuh 1 parameter, yaitu sisi`
  }
}

console.log(volumeBalok(2, 3, 4))
console.log(volumeKubus(5))




// SOAL NOMOR 15

let warna = ["biru", "merah", "kuning", "hijau"]
let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020
}

let buku = {
  nama: "pemrograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"]
}

buku = { ...buku, ...dataBukuTambahan, warnaSampul: [...buku.warnaSampul, ...warna]}

console.log(buku);