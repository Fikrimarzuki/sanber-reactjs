import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/Context";

export default function Login() {
  const context = useContext(AuthContext);
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();
    localStorage.isAuth = true;
    context.setIsAuth(true);
    history.push("/movies");    
  }

  return (
    <section>
      <div style={{ textAlign: "center", paddingBottom: "20px" }}>
        <h1>Login</h1>
        <form onSubmit={ handleSubmit }>
          <div>
            <label style={{ fontWeight: "bold" }}>Username: </label>
            <input type="text" />    
          </div>
          <div style={{ padding: "10px" }}>
            <label style={{ fontWeight: "bold" }}>Password: </label>
            <input type="password" />
          </div>
          <button className="button-primary" type="submit">Login</button>
        </form>
      </div>
    </section>
  )
}