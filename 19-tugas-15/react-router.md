Hari Ke-15 – Reactjs – React Router
pastinya dalam benak kita terpikirkan bagaimana ya berpindah-pindah halaman di reactjs, apa yang harus kita lakukan, apakah cukup menggunakan state?, atau apakah cukup menggunakan hooks atau context?. ya sebenarnya itu cukup hanya saja kita harus menyiapkan manajemen halamannya itu sendiri.

oleh karena itu kita membutuhkan sebuah package yang dapat membantu kita, lalu apakah tools tersebut? jawabannya adalah ada yaitu React Router. React Router merupakan packages yang memungkinkan kita untuk mengatur navigasi dari setiap component.

untuk menggunakan react router silahkan install react router di project reactjs anda:

npm install react-router-dom
untuk contoh penggunaan dasar di dalam react router seperti di bawah ini

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
jika kita menggunakan kode tersebut kita dapat menggunakan navigasi dalam untuk menampilkan masing-masing komponen

lalu bagaimana pengimplementasiannya jika kita menggunakan file terpisah. mari kita coba membuatnya

pertama kita import router ke app.js dan gunakan tag component Router tersebut

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* masukkan kode anda disini */}
    </Router>   
    );
  }
  
export default App;
langkah ke dua buatlah file yang mengatur navigasi kita misal diberi nama Routes.js

import React from "react";
import Home from "./Home";
import { Switch, Route } from "react-router";

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
lalu buatlah nav yang mengatur setiap kali link di klik akan menujur route tersebut

import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </>
  )
}

export default Nav
lalu gunakan component Routes dan Nav tersebut untuk di dalam component Router seperti di bawah ini:

function App() {
  return (
    <Router>
      <Routes/>
    </Router>   
    );
  }
Referensi:

https://reactrouter.com/
https://reactrouter.com/web/guides/quick-start
Updated on September 11, 2020

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-3-materi/reactjs-react-router/
