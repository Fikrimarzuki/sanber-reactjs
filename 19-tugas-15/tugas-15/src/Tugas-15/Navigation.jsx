import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

export default function Navigation() {
  const context = useContext(Context);
  const stylingTheme = value => {
    if (value === 'black') return "dark";
    if (value === 'white') return "light";
  }
  const changeTheme = event => {
    const value = event.target.checked;
    if (value) {
      context.setTheme("black");
    } else {
      context.setTheme("white");
    }
  }

  return (
    <Context.Consumer>
      { value => {
        return (
          <nav className={ stylingTheme(value.theme) }>
            <Link to="/tugas-9">Tugas 9</Link>
            <Link to="/tugas-10">Tugas 10</Link>
            <Link to="/tugas-11">Tugas 11</Link>
            <Link to="/tugas-12">Tugas 12</Link>
            <Link to="/tugas-13">Tugas 13</Link>
            <Link to="/tugas-14">Tugas 14</Link>
            <Link to="/tugas-15">Tugas 15</Link>
            <>
              {
                <label className="switch">
                  <input type="checkbox" onChange={e => changeTheme(e)}/>
                  <span className="slider round"></span>
                </label>
              }
            </>
          </nav>
        )
      }}
    </Context.Consumer>
  )
}
