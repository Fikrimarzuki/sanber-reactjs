Hari Ke-2 – CSS
Cascading Style Sheet atau dikenal dengan CSS merupakan bahasa style sheet yang berguna untuk membantu menyajikan dokumen yang ditulis dengan HTML. CSS dipakai untuk mendesain halaman depan atau tampilan website (front end). Menggunakan CSS kita bisa mengatur warna , ukuran , posisi , background, dan lain lain. Sehingga ada nilai estetika yang ditambahkan dalam tampilan suatu website.

Selektor , Properti dan Value 
Pada CSS ada beberapa istilah biasa kita temukan diantara : selector , properti, dan value . Kita mempelajari terlabih dahulu pengertian dari ketiga istilah tersebut.

Selektor adalah metode pengelompokan syntax didalam CSS. Selector juga dapat diartikan sebagai aturan yang digunakan untuk memisahkan beberapa syntax dengan target yang berbeda.

Properti adalah suatu jenis style CSS yang berfungsi memberikan style pada selector yang telah ditentukan. Property pada CSS sangat banyak sekali. Banyak contoh properti css seperti : background-color, color, font-family, font-size, margin, padding dan lain lain.

Value adalah nilai dari property . Dan value harus bersesuaian dengan properti, misalnya properti "font-family" tidak bisa diisi "red" karena "red" adalah value untuk property "color".

Ada bentuk baku penulisan selektor , properti dan value :

https://blog.sanbercode.com/wp-content/uploads/2020/06/image-13.png

Gambar 1 bentuk baku penulisan selektor , properti , dan value pada css
//contoh css
h2 { 
      font-family: sans;
      color: rgb(10, 8, 8);
    }
selektor pada contoh diatas adalah h2
properti pada contoh diatas adalah font-family dan color
value pada contoh diatas adalah sans dan rgb(10, 8, 8);
Cara Penulisan Kode CSS dalam HTML 
‌Internal CSS
Penulisan CSS didalam tag <head> atau <body> HTML. Penulisannya ditulis dalam tag <style> .

<!DOCTYPE html>
<html>
<head>   
  <style type="text/css">
    p{
      font-family: Helvetica;
      line-height: 2.00 em;
      font-size: 20px;
      color: orange;
     }
    </style>
</head>

<body>
  
  <style type="text/css">
    h2 { 
      font-family: sans;
      color: rgb(10, 8, 8);
    }
  </style>

  <h2>Hello CSS</h2>
  <p>Hello aku bisa CSS</p>
</body>
</html>

https://blog.sanbercode.com/wp-content/uploads/2020/06/image-8.png

Gambar 2 Contoh Internal CSS dalam HTML dan tampilannya
Eksternal CSS
Penulisan CSS terpisah dengan file HTML. File CSS ditulis dan disimpan dengan file berekstensi .css .Untuk memasukkan ekstensi CSS ke HTML menggunakan tag <link href="dirfolder/namefile.css">. href diisi direktori folder dan nama file CSS untuk mengarahkan halaman html menemukan file CSS tersebut.

https://blog.sanbercode.com/wp-content/uploads/2020/06/image-10.png

Gambar 3 <kiri> file HTML dan <kanan> style.css
Inline CSS
Penulisan CSS langsung di atribut HTML tersebut. Contoh cara pemakaian inline CSS:

https://blog.sanbercode.com/wp-content/uploads/2020/06/image-12.png

Untuk lebih mengenal CSS terdapat video tutorial yang dapat diikuti seperti berikut:

Tutorial CSS dari Sekolah Coding: https://www.youtube.com/playlist?list=PLCZlgfAG0GXAvVZ1Wb1D7HVAPNJGk4f-G
CSS Dasar dari Web Programming Unpas :https://www.youtube.com/playlist?list=PLFIM0718LjIUBrbm6Gdh6k7ZUvPIAZm7p
Sumber: https://www.w3schools.com/cssref/

Updated on Agustus 25, 2020

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-1-materi/hari-ke-2-css/
