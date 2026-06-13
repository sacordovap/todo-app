import { TodoApp } from "./components/todo-app/todo-app";
import styles from "./styles/app.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <TodoApp />
    </div>
  );
}
