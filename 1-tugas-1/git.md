Hari Ke-1 – Git
Apa itu Git ?
Git adalah sebuah Version Control System yaitu sistem yang mengelola perubahan dari sebuah dokumen, program komputer, website dan kumpulan informasi lain.

Selain itu, Git memungkinkan para pengembang perangkat lunak dari berbagai belahan dunia mengerjakan banyak projek bersama-sama tanpa mengharuskan bertatap muka.

Git sendiri disimpan dalam sebuah folder atau directory project yang biasa di sebut repository

Installasi Git
Installasi di Windows dan Mac
Untuk menginstall git ke dalam windows dan mac, download terlebih dahulu file instalasi nya dari halaman download git.

https://blog.sanbercode.com/wp-content/uploads/2020/06/image-36-1024x767.png

jika sudah terdownload, klik file instalasi lalu ikuti instruksi instalasi (klik next saja sampai selesai).

https://blog.sanbercode.com/wp-content/uploads/2020/06/image-37.png

setelah instalasi selesai, kita dapat mengecek apakah Git sudah terinstall dengan cara membuka cmd atau command prompt lalu ketikkan perintah git --version.

https://blog.sanbercode.com/wp-content/uploads/2020/07/image-25.png

Installasi di Ubuntu
Untuk menginstall git ke dalam ubuntu dalam hal ini ubuntu versi 18.04 cukup masuk terminal lalu jalankan perintah

$ sudo apt update
lalu jalankan perintah

$ sudo apt install git
lalu anda bisa mengecek git sudah terinstall dengan mengetikkan perintah git --version di terminal

https://blog.sanbercode.com/wp-content/uploads/2020/07/image-34.png

Setup Git
setelah menginstall git, hal yang di lakukan selanjutnya adalah setup git config email dan username seperti di bawah ini

git config --global user.name "username anda"
git config --global user.email "email anda"
anda dapat melihat hasil config ini dengan perintah

git config -l

Perintah Dasar Git
git init
git init adalah perintah untuk inisialisasi atau memasangkan git pada sebuah repository yang sedang terbuka di command prompt atau terminal.

https://blog.sanbercode.com/wp-content/uploads/2020/07/image-26.png

pada contoh di atas, setelah memberikan perintah git init akan muncul keterangan “Initialized empty Git repository in . . . ” yang berarti folder git-demo yang sedang dibuka di cmd sudah dapat menggunakan Git di dalamnya.

git add 
git add yaitu perintah git untuk menambahkan perubahan-perubahan pada direktori project sebelum menyimpan perubahan tersebut. Misalkan di repository project kita terdapat file index.html yang ingin kita simpan perubahannya.

$ git add index.html
git commit 
git commityaitu perintah dari git untuk menyimpan perubahan yang ada di repository dan perintah ini biasanya disertakan dengan -m "[keterangan_perubahan_yang_dilakukan]" untuk menuliskan perubahan yang di lakukan

git commit -m "menambahkan index.html"
git status
git status adalah perintah dalam git untuk memeriksa status repository, apakah ada file baru, perubahan pada file atau file sudah di add, atau apakah perubahan sudah di commit atau belum.

https://blog.sanbercode.com/wp-content/uploads/2020/07/image-29.png

git push
git push adalah perintah dalam git untuk mengirimkan perubahan perubahan file pada repository

git pull
git pull adalah perintah dalam git untuk mengabil perubahan terakhir dari repository di git

Tutorial Video 
Untuk selanjutnya materi dapat dicoba melalui video kelas di link berikut: link video (Web Programming UNPAS – GIT & GITHUB )

Updated on Agustus 24, 2020

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-1-materi/git/
