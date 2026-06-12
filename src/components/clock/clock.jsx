import { useEffect, useState } from "react";
import styles from "./clock.module.css";

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2>La hora es:</h2>
      <p>{time}</p>
    </div>
  );
}
