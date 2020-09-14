Reactjs – Menggunakan Material UI
mungkin dalam benak kita sering terpikir bagaimana tampilan UI yang tepat untuk reactjs, apakah kita harus styling satu persatu, component per component dan apakah kita harus membuat itu semua dari awal. mungkin opsi tersebut bisa di pilih tapi sebenarnya kita bisa menggunakan framework Design UI yang.

framework Design UI reactjs yang sering digunakan cukup beragam, misalnya material UI, Core UI, Ant Design dll.

pada materi kali ini kita akan mencoba menggunakan material UI dan mencoba sedikit penerapannya

langkah pertama adalah kita perlu install material UI terlebih dahulu

npm install @material-ui/core
lalu kita bisa coba membuat component yang menggunakan material UI

import React from 'react';
import {Button, Container} from '@material-ui/core';

const Example = () => {
  return (
    <Container>
      <br/>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  );
}

export default Example
maka akan muncul tampilan seperti di bawah ini:

https://blog.sanbercode.com/wp-content/uploads/2020/08/image-41.png

ini adalah component button yang menggunakan material UI, selain button terdapat banyak component yang lainnya

untuk contoh component lainnya anda bisa mengecek dokumentasinya material UI melalui : https://material-ui.com/components/box/ (ini untuk component box, yang lainnya ada di bawah menu box)

Referensi:

https://material-ui.com/getting-started/installation/
https://material-ui.com/getting-started/usage/
Updated on September 14, 2020

https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-4-materi/menggunakan-material-ui/