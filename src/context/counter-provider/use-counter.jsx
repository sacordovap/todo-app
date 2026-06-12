import { useContext } from "react";
import { CounterContext } from "./counter-context";

export function useCounter() {
  const { counter, setCounter, name } = useContext(CounterContext);

  return {
    name,
    counter,
    setCounter,
  };
}
