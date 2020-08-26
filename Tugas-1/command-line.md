Hari Ke-1 – Command Line Interface
Apa itu command line Interface? 
Command line Interface (CLI) atau yang biasa kita kenal cmd atau command prompt atau terminal adalah software atau antar muka untuk memberikan perintah-perintah dasar pada komputer kita. Biasanya kita mengoperasikan komputer seperti browsing media, mencari file, membuat file atau folder, dan lain-lain dengan GUI (Graphical User Interface) yang sudah disediakan pengembang Sistem Operasi seperti Windows, Linux, atau OSX. Namun pada dasarnya kita juga bisa melakukan operasi-operasi tersebut dalam suatu perintah yang kita kirimkan melalui cmd/terminal. Berikut ini beberapa contohnya:

Menuju folder/direktori tertentu
Untuk menuju posisi folder atau direktori tertentu bisa gunakan perintah cd atau kepanjangan dari change directory

// Menuju Desktop
$ cd Desktop
// Menuju ke direktori parent (sebelumnya)
$ cd ..
Mengetahui alamat dari direktori yang sedang dibuka
Terkadang kita butuh tahu sedang dimana posisi terminal kita berjalan. Perintah untuk fungsi ini yaitu pwd atau kependekan dari path of working directory

$ pwd
/home/users
// sedang berada di folder home/users
Mengetahui daftar isi dari sebuah direktori/folder
Kamu bisa gunakan perintah ls atau dir . contohnya sebagai berikut

$ ls 
Document Desktop Image index.html
$ dir
Document Desktop Image index.html 
Membuat folder baru
Perintahnya adalah mkdir atau singkatan dari make directory. contohnya sebagai berikut

// membuat folder baru bernama new-folder
$ mkdir new-folder
// mengecek apakah sudah berhasil buat folder baru
$ ls
new-folder ... ...  
Membuat file baru
Gunakan perintah touch untuk membuat file baru

// membuat file index.html
$ touch index.html
// mengecek apakah sudah berhasil buat file baru
$ ls 
index.html ... ... 
Software terminal / command line yang direkomendasikan 
Untuk OS Windows, terminal bawaannya adalah command prompt atau cmd yang relatif kurang nyaman untuk dipakai dalam tahap development. Oleh karena itu direkomendasikan untuk install terminal di bawah ini agar lebih optimal dalam mengerjakan project.

Cmder, link download: cmder
Git bash, Git bash biasanya ter-install jika kita meng-install git di pc/laptop kita.
Updated on Agustus 24, 2020

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-1-materi/command-line/
