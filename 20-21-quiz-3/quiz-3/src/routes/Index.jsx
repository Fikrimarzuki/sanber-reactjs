import React from "react";
import { Switch, Route } from "react-router-dom";

import NavGuard from "./NavGuard";
import Home from "../views/Home";
import About from "../views/About";
import MovieListEditor from "../views/MovieListEditor";
import Login from "../views/Login";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/login",
    beforeEnter: NavGuard,
    component: Login
  },
  {
    path: "/movies",
    beforeEnter: NavGuard,
    component: MovieListEditor
  }
]


export default function Routes() {
  return (
    <Switch>
      {
        routes.map((route, i) => {
          if (route.beforeEnter) {
            return <route.beforeEnter key={i} exact path={route.path} component={route.component}/>
          } else {
            return <Route
              key={i}
              exact
              path={route.path}
              render={props => (
                <route.component {...props} />
              )}
            />
          }
        })
      }
    </Switch>
  )
}