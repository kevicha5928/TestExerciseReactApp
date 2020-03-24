import React, { createContext } from "react";

// const Context = createContext()
// destructured
export const { Provider, Consumer } = createContext();

export const withContext = Component => props => (
  <Consumer>{value => <Component {...value} {...props} />}</Consumer>
);
