Hari Ke-9 – Pengenalan Reactjs
Apa itu ReactJS?
ReactJS atau React adalah Javascript library yang digunakan untuk membangun user interface (antar muka), jadi react itu adalah sebuah library bukan sebuah framework

reactjs sendiri di kembangkan oleh facebook. react dibuat oleh Jordan Walke, seorang software engineer di Facebook, yang merilis prototipe awal React yang disebut “FaxJS “.

berikut ini hal-hal yang penting dalam reactjs:

1. Components
Components bisa di bilang hal yang sangat penting di reactjs. Components adalah semacam konsep bagaimana cara untuk membuat tiap bagian dari UI (tampilan) bisa bekerja secara mandiri dan terisolasi dari bagian-bagian yang lain.

Sebenarnya secara sadar atau tidak sadar bagi yang sering bekerja dengan kode HTML, selalu melakukan pemisahan bagian dari halaman-halaman misalnya Header, Content, dan Footer. Biasanya tujuannya agar kode tidak menumpuk di satu halaman sehingga di pisahkan ke file-file kecil yang lebih spesifik fungsinya dan kode lebih maintainable jika ada perbaikan.

Khusus di reactjs bahkan hampir bagian terkecil di tampilan disarankan untuk dipisahkan. components ini memiliki sifat reusable yang membuat developer tidak perlu menyalin halaman atau komponen yang sama berulang-ulang

berikut ini ilustrasi components di reactjs:


illustrasi components
2. JSX
JSX merupakan ekstensi javascript yang membuat kita dapat menuliskan tag HTML di dalam javascript.


illustrasi jsx
pada reactjs ini kita akan JSX dan mungkin ada sedikit perbedaan di dalamnya, tetapi untuk yang sudah memahami html ini tidak akan terlihat sulit

3. Virtual DOM
Jika mulai mendalami React, akan ada pertanyaan apa itu virtual DOM? Virtual DOM adalah representasi DOM secara virtual.

Kenapa React menggunakan virtual DOM? JavaScript itu sebenarnya cepat. Yang membuat JavaScript terasa lambat adalah ketika JavaScript mengolah DOM. React membuat virtual DOM untuk mempercepat urusan tersebut.

React melakukan semua operasi di dalam virtual DOM. Setelah operasi tersebut selesai, React menulis perubahan tersebut di DOM.

Proses di React jika ada perubahan suatu elemen di dalam DOM:

1. React sudah mempunyai representasi dari DOM di virtual DOM.

2. React menerima representasi DOM yang berisi perubahan.

3. React membandingkan perbedaan kedua representasi lama dan baru.

4. Hasil dari perbandingan tersebut dimasukkan ke antrian.

5. Terakhir React akan me-render ulang patch tersebut ke DOM

Analoginya begini, saya punya pensil dan spidol. Ketika saya menulis di kertas menggunakan spidol dan melakukan kesalahan (typo) di tengah paragraf maka saya harus mengganti dengan kertas yang baru dan menulis lagi dari awal.

Namun jika saya menggunakan pensil, saya bisa menghapus kesalahan tersebut dengan penghapus tanpa mengulang lagi dari awal.

4. States & Lifecycle
State adalah asal dari suatu data. Komponen pada react tentunya membutuhkan data (tidak semua namun rata-rata membutuhkan data). Data tersebut dapat berasal dari mana saja. State adalah salah satu sumber data tersebut. Selain state data dari komponen juga dapat berasal dari props (bukan property).

Lifecycle dalam sebuah komponen dalam react, terdapat tiga lifecycle berikut: Inisialisasi / mounting (ketika komponen dibuat/ditambahkan pertama kali pada DOM)

Update / rerender (ketika terdapat perubahan state/prop yang mengakibatkan perubahan pada DOM)

Unmounting (ketika komponen akan dihapus dari DOM)

Pada setiap lifecycle tersebut, komponen react akan mengeksekusi method/fungsi yang berbeda yang kita sebut sebagai lifecycle methods. Beberapa method mempunyai prefix will dan did yang menunjukkan kapan method tersebut akan dieksekusi.

Setup dan Installasi ReactJS
requirements:

nodeJS
text editor (visual studio code, sublime, atom dll)
terminal (bisa cmd, git bash atau terminal di text editor)
pertama masuk ke terminal lalu pindah ke folder yang diinginkan untuk installasi project reactjs, lalu jalankan perintah seperti di bawah ini

npx create-react-app my-app
untuk text “my-app” dapat di ganti sesuai dengan nama yang kita inginkan


illustrasi create react app
tunggulah hingga proses installasi selesai, lalu pindah menuju folder my-app (jika nama appnyna berbeda bisa di sesuaikan dengan). lalu ketikkan perintah

npm start
seperti di gambar di bawah ini:


illustrasi npm start
setelah itu otomatis browser default anda menambahkan tab dengan url localhost:4000 (default port untuk localhostnya adalah 4000) yang menampilkan tampil react app seperti di bawah ini


starter react
pada gambar diatas kita di beritahu bahwa kita dapat mengedit file app.js di dalam folder src, mari kita ubah sedikit app js tersebut


pada app.js tersebut maka anda akan mendapatkan kode seperti di bawah ini


disini kita coba hapus semua tag header lalu masukkan kode baru seperti di bawah ini:

<h1>Hello World</h1>
maka akan muncul tampilan seperti di bawah ini:


selamat anda telah membuat app react pertama anda. untuk detail mengenai components, props, state dan lain sebagainya akan di berikan detailnya di materi berikutnya.

Referensi:

https://reactjs.org/docs/create-a-new-react-app.html
https://blog.codigo.id/react-js-60fa358daefc
https://medium.com/@adhiguna.sabril/mengenal-components-di-react-js-dengan-es6-2bcd6ba74c73
Updated on September 3, 2020

https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-2-materi/hari-ke-9-pengenalan-reactjs/
