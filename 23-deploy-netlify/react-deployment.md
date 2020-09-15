Reactjs – Deployment
didalam membangun suatu aplikasi atau web app tentunya ada masa dimana kita akan deployment aplikasi kita, biasanya dalam deployment kita membuat dua server staging dan production, staging di gunakan untuk testing sebelum nantinya aplikasi di gunakan di production yang tentunya akan di gunakan user

pada materi kali ini kita akan mencoba deployment project kita dalam keperluan staging, sebenarnya banyak opsi untuk membuat aplikasi kita bisa diakses orang lain, kita bisa menggunakan Cloud, VPS, hosting, SaaS (Software as a Service) dll.

pada materi ini kita akan melakukan deployment ke netlify sebagai SaaS. sebelum lanjut cara ke deployment, silahkann anda untuk mengakses netlify.com dan login ke akun netlify anda, jika belum punya silahkan register akun terlebih dahulu

untuk deployment dengan netlify terdapat dua cara yaitu:

Drag & Drop
cara pertama adalah dengan drag folder build dari project reactjs ke sites di netlify. oleh karena itu kita jalankan perintah ini untuk build project reactjs

npm run build

tunggulah proses tersebut hingga selesai

lalu drag folder build tersebut ke sites di netlify anda

https://blog.sanbercode.com/wp-content/uploads/2020/08/2020-08-11-08-57-07_Trim_Trim.gif

Netlify CLI
cara kedua adalah menggunakan netlify cli sama seperti sebelumnya build reactjs terlebih dahulu

npm run build
lalu install netlify cli dengan perintah di bawah ini

npm install netlify-cli -g
setelah itu jalankan perintah deploy seperti di bawah ini

netlify deploy
Referensi:

https://www.freecodecamp.org/news/how-to-deploy-a-react-application-to-netlify-363b8a98a985/
https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/
Updated on September 15, 2020

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-4-materi/reactjs-deployment/
