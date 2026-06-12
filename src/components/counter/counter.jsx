import styles from "./counter.module.css";
import { useCounter } from "../../context/counter-provider/use-counter";

export function Counter() {
  const { counter, setCounter } = useCounter();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const isDisabled = counter === 0;

  return (
    <div className={styles.container}>
      <p>{counter}</p>

      <button className={styles.button} onClick={handleIncrement}>
        Incrementar
      </button>

      <button
        disabled={isDisabled}
        onClick={handleDecrement}
        className={`${styles.button} ${isDisabled && styles.disabled}`}
      >
        Decrementar
      </button>
    </div>
  );
}
