import React, { useEffect } from "react";
import {
  Link,
  useHistory
} from "react-router-dom";

import { AuthContext } from "../context/Context";

export default function Navigation() {
  const context = React.useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.isAuth) {
      context.setIsAuth(true);
    } else {
      context.setIsAuth(false);
    }
  })

  const logout = () => {
    context.setIsAuth(false);
    localStorage.removeItem("isAuth");
    history.replace("/login");
  }

  const navCondition = () => {
    if (context.isAuth) {
      return (
        <>
          <div><Link to="/movies">Movie List Editor </Link> </div>
          <div><Link to="/login" onClick={ logout }>Log Out</Link></div>
        </>
      )
    } else {
      return <div><Link to="/login">Login </Link></div>
    }
  }

  return (
    <header>
      <Link to="/">
        <img id="logo" src={ require('../assets/img/logo.png') } width="200px" alt="brand" />
      </Link>
      <nav>
        <div><Link to="/">Home </Link> </div>
        <div><Link to="/about">About </Link> </div>
        { navCondition() }
      </nav>
    </header>
  )
}