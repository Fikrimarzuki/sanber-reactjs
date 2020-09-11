import React from "react";

export const Context = React.createContext({
  theme: "default",
  setTheme: () => {}
});
export const FormContext = React.createContext();
