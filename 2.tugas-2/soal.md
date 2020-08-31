Tugas 2 – HTML & CSS
Petunjuk Pengerjaan
Ikutilah langkah-langkah pengerjaan di bawah ini:‌

1. Menambahkan Folder Baru
Buat folder baru dengan nama “Tugas-2”, lalu file yang dibuat di bawah di masukan ke folder tersebut

2. Membuat File HTML
a. membuat file index.html
Buatlah sebuah file HTML bernama index.html. Gunakan code yang sudah disediakan di bawah ini:

<html>
  <head>
    <link href="public/css/style.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
  </head>
  <body>
    <header>
      <img id="logo" src="public/css/logo.png" width="200px" />
      <nav>
        <ul>
          <a href="index.html"><li>Home</li></a>
          <a href="about.html"><li>About</li></a>
          <a href="contact.html"><li>Contact</li></a>
        </ul>
      </nav>
    </header>
    <section>
      <h1>Featured Posts</h1>
      <div id="article-list">
        <div>
          <a href=""><h3>Lorem Post 1</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </div>
        <div>
          <a href=""><h3>Lorem Post 2</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </div>
        <div>
          <a href=""><h3>Lorem Post 3</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </div>
        <div>
          <a href=""><h3>Lorem Post 4</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </div>
        <div>
          <a href=""><h3>Lorem Post 5</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </div>
      </div>
    </section>
    <footer>
      <h5>copyright &copy; 2020 by Sanbercode</h5>
    </footer>
  </body>
</html>

b. membuat file about.html
buatlah file about.html dengan tampilan seperti ini

https://blog.sanbercode.com/wp-content/uploads/2020/07/image-39.png

lalu tambahkan tag di bawah ini

<a href="index.html">Kembali Ke Index</a>

c. membuat file contact.html
buatlah file contact.html dengan tampilan seperti ini

https://blog.sanbercode.com/wp-content/uploads/2020/07/image-41.png

lalu tambahkan tag di bawah ini

<a href="index.html">Kembali Ke Index</a>

3. Buat File CSS
Buatlah file CSS di dalam folder bernama ‘css’. folder ‘css’ tersebut berada di dalam folder public. kemudian hubungkan pada file index.html dengan cara menambahkannya di header

<link href="public/css/style.css" rel="stylesheet" type="text/css">

4. Menyiapkan Asset Gambar
Buatlah folder di dalam folder public dengan nama img dimana kita akan meletakkan gambar kita di sana. Sehingga nantinya pengambilan alamat dari gambar di folder : public/img/logo.png . Aset gambar bisa kamu download dari file di bawah ini. Download logo dengan nama logo.png dan gambar pola sebagai pattern.png

https://gblobscdn.gitbook.com/assets%2F-LiR2ZMOIaxmhLlPQhLa%2F-LsKO0ePPOrb2KQEd7Gq%2F-LsKOmfnPPoDiqmDH44r%2Flogo.png?alt=media&token=b613bed4-5936-4f6b-aec4-aed6c214f630

https://gblobscdn.gitbook.com/assets%2F-LiR2ZMOIaxmhLlPQhLa%2F-LsKO0ePPOrb2KQEd7Gq%2F-LsKOnZbYN8Zs5H89ODH%2Fpattern.jpg?alt=media&token=27a7b746-8252-45a5-8df2-b1b68fb8ceae

keterangan: logo sanbercode untuk logo yang akan ditampilkan. sedangkan gambar pola yang di bawahnya adalah gambar yang dijadikan background. ‌

5. Membuat Layout HTML + CSS
Buatlah halaman web dengan layout seperti di bawah ini di file index.html:

https://blog.sanbercode.com/wp-content/uploads/2020/06/ezgif.com-crop.gif


File-file gambar:

* logo sanbercode : https://drive.google.com/file/d/1125xkTSNko19q8wbksvKbj4s7ybIwmHO/view?usp=sharing
* background pattern: https://drive.google.com/file/d/1aMMIlxYxOcWUDW5JwoSp31fW0A73-Y5D/view?usp=sharing
* simulasi output gif: https://drive.google.com/file/d/17Cl5vISGOwWqjcDsJmJqQBiHxGoJ_GWB/view?usp=sharing

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-1-tugas/tugas-2-html-css/
