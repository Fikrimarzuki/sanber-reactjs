// function luasLingkaran(radius) {
//   let pi = 3.14;
//   if (radius % 7 === 0) {
//     pi = 22/7
//   }
//   return pi * radius * radius
// }

// function luasSegitiga(alas, tinggi) {
//   return (1/2) * alas * tinggi
// }

// function luasPersegi(sisi) {
//   return sisi * sisi
// }

// console.log(luasLingkaran(14));
// console.log(luasSegitiga(20, 10));
// console.log(luasPersegi(5));


// var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];

// let i = 0;
// let status = true;
// while(true) {
//   if (status) {
//     if(daftarAlatTulis[i][0] > daftarAlatTulis[i+1][0]) {
//       let temp = daftarAlatTulis[i];
//       daftarAlatTulis[i] = daftarAlatTulis[i+1]
//       daftarAlatTulis[i+1] = temp
//       i = 0
//     } else {
//       i++
//     }
//     if (!daftarAlatTulis[i+1]) {
//       i = 0;
//       status = false;
//       console.log("Output");
//     }
//   }
//   if (!status) {
//     console.log(daftarAlatTulis[i]);
//     if(!daftarAlatTulis[i+1]) {
//       break;
//     }
//     i++
//   }
// }

// var pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]]

// let array = []
// for(let i = 0; i < pesertaLomba.length; i++) {
//   let obj = {
//     name: pesertaLomba[i][0],
//     gender: pesertaLomba[i][1],
//     height: pesertaLomba[i][2]
//   }
//   array.push(obj)
// }

// console.log(array)


var daftarNama = [];

function tambahNama(nama, jenisKelamin) {
  let obj = {
    nama,
    jenisKelamin
  }
  if(jenisKelamin === "laki-laki" || jenisKelamin === "pria") {
    obj.panggilan = "Bapak " + nama
  } else if (jenisKelamin === "perempuan" || jenisKelamin === "wanita") {
    obj.panggilan = "Ibu " + nama
  } else {
    obj.panggilan = "Unknown" + nama
  }
  daftarNama.push(obj);
}

tambahNama("Asep", "laki-laki");
tambahNama("Siti", "perempuan");
tambahNama("Yeni", "perempuan");
tambahNama("Rudi", "laki-laki");
tambahNama("Adit", "laki-laki");

for(let i = 0; i < daftarNama.length; i++) {
  console.log((i + 1) + ". " + daftarNama[i].panggilan);
}
