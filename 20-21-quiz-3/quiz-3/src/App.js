import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Routes from "./routes/Index";

import { AuthContext } from "./context/Context";

import "./App.css";
import "./assets/css/style.css";

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Router>
        <div className="App">
          <Navigation />
          <Footer />
        </div>
        <Routes />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
