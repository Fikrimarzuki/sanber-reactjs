import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Context } from "./context/Context";
import Tugas9 from "./Tugas-9/Index";
import Tugas10 from "./Tugas-10/Index";
import Tugas11 from "./Tugas-11/Index";
import Tugas12 from "./Tugas-12/Index";
import Tugas13 from "./Tugas-13/Index";
import Tugas14 from "./Tugas-14/Index";
import Tugas15 from "./Tugas-15/Index";
import Navigation from "./Tugas-15/Navigation";
import LandingPage from "./Tugas-15/LandingPage";

function App() {
  const [theme, setTheme] = useState("white");

  return (
    <Context.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/tugas-9">
              <Tugas9 />
            </Route>
            <Route path="/tugas-10">
              <Tugas10 />
            </Route>
            <Route path="/tugas-11">
              <Tugas11 />
            </Route>
            <Route path="/tugas-12">
              <Tugas12 />
            </Route>
            <Route path="/tugas-13">
              <Tugas13 />
            </Route>
            <Route path="/tugas-14">
              <Tugas14 />
            </Route>
            <Route path="/tugas-15">
              <Tugas15 />
            </Route>
          </Switch>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
