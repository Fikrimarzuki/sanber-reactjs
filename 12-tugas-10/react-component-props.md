Hari Ke-10 – Components & Props
Components memungkinkan Anda membagi UI menjadi bagian-bagian yang independen dan dapat digunakan kembali, dan anda bisa mengaturnya setiap bagian secara terpisah

sedangkan props merupakan properti-properti dari component yang dapat kita gunakan untuk menampilkan data, biasanya digunakan untuk inisialisasi data

Secara konseptual, komponen seperti function JavaScript. Mereka menerima input dan mengembalikan React Element yang akan muncul di layar

Function Components dan Class Components
untuk mendefinisikan component terdapat dua cara yaitu dengan menggunakan function dan class

berikut ini contoh component yang menggunakan function

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function di atas ialah react component yang valid karena function itu menerima argumen “props” (singkatan dari properties) tunggal dengan data dan akan memberikan return ke React Element. kita bisa menyebut function tersebut dengan “Function Component” karna secara harfiah itu adalah function JavaScript.

dan kita juga bisa menggunakan ES6 class untuk mebangun component. berikut ini contoh component dengan menggunakan class React.Component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
Menyusun Components
Component dapat merujuk ke component lain dalam outputnya. Ini memungkinkan kita bisa menggunakan component yang sama secara berulang-ulang (reusable).

berikui ini contoh untuk cara menyusun components (asumsi ini di folder app.js)

import React from 'react';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome name="Sarah" />
      <Welcome name="Michael" />
      <Welcome name="John" />
    </div>
  );
}

export default App;
Mengolah data dan mengekstrak component
mungkin timbul pertanyaan bagaimana cara mengolah data dan di munculkan ke component, lalu bagaimana jika ingin menggunakan component yang berbeda-beda dan di gunakan gabungkan satu tempat. mari kita simak contoh di bawah ini

misal ada data seperti di bawah ini:

var person = [
  {name: "sarah", age: 25},
  {name: "michael", age: 30},
  {name: "john", age: 33}
]
lalu ada dua component seperti di bawah ini:

welcome component

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
age component

class Age extends React.Component {
  render() {
    return <h1>your age is {this.props.age}</h1>;
  }
}
untuk mengolah data person di atas dan menggabungkan dua component tersebut kita bisa membuat component baru yang melakukan dua hal tersebut.

berikut ini contoh pengolahan data dan penggabungan dua component tersebut:

var person = [
  {name: "sarah", age: 25},
  {name: "michael", age: 30},
  {name: "john", age: 33}
]

class UserInfo extends React.Component {
  render() {
    return (
      <>
        {person.map(el=> {
          return (
            <div style={{border: "1px solid #000", padding: "20px"}}>
              <Welcome name={el.name}/> 
              <ShowAge age={el.age}/> 
            </div>
          )
        })}
      </>
    )
  }
}
lalu penerapannya dalam file app.js adalah seperti berikut ini:

import React from 'react';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class ShowAge extends React.Component {
  render() {
    return <h1>your age is {this.props.age}</h1>;
  }
}

var person = [
  {name: "sarah", age: 25},
  {name: "michael", age: 30},
  {name: "john", age: 33}
]



class UserInfo extends React.Component {
  render() {
    return (
      <>
        {person.map(el=> {
          return (
            <div style={{border: "1px solid #000", padding: "20px"}}>
              <Welcome name={el.name}/> 
              <ShowAge age={el.age}/> 
            </div>
          )
        })}
      </>
    )
  }
}

function App() {
  return (
    <div>
      <UserInfo />
    </div>
  );
}

export default App;
import dan export module
seperti yang dilihat diatas maka file app.js akan terlalu penuh, lalu apakah kita bisa membuat file tersendiri untuk UserInfo misal, jawabannya adalah iya

buatlah file UserInfo.js di dalam folder src lalu masukkan kode di bawah ini:

import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class ShowAge extends React.Component {
  render() {
    return <h1>your age is {this.props.age}</h1>;
  }
}

var person = [
  {name: "sarah", age: 25},
  {name: "michael", age: 30},
  {name: "john", age: 33}
]

class UserInfo extends React.Component {
  render() {
    return (
      <>
        {person.map(el=> {
          return (
            <div style={{border: "1px solid #000", padding: "20px"}}>
              <Welcome name={el.name}/> 
              <ShowAge age={el.age}/> 
            </div>
          )
        })}
      </>
    )
  }
}

export default UserInfo
lalu untuk import UserInfo di app.js bisa adalah seperti di bawah ini:

import React from 'react';
import './App.css';
import UserInfo from './UserInfo';

function App() {
  return (
    <div>
      <UserInfo />
    </div>
  );
}

export default App;
Referensi:

https://id.reactjs.org/docs/components-and-props.html
Updated on September 4, 2020

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-2-materi/hari-ke-10-components-props/

