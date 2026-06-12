import { useState } from "react";
import { CounterContext } from "./counter-context";

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const name = "Steven";

  return (
    <CounterContext.Provider value={{ counter, setCounter, name }}>
      {children}
    </CounterContext.Provider>
  );
};
