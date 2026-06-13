import { useState } from "react";
import styles from "./todo.module.css";

// Recibe un único objeto 'todo' y lo muestra
export function Todo({ todo, deleteTodo, completeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (newText.trim() === "") {
      alert("La tarea no puede estar vacía");
      return;
    }    
    if (isEditing) {
      editTodo(todo.id, newText); // Guardamos el cambio
    }
    setIsEditing(!isEditing); // Cambiamos de modo
  };

  return (
    <li className={styles.todoItem}>
      {isEditing ? (
        <input
          className={styles.editInput}
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <>
          <button
            className={styles.btnCheck}
            onClick={() => completeTodo(todo.id)}
          >
            {todo.complete ? "✅" : "⬜"}
          </button>

          <span
            className={`${styles.text} ${todo.complete ? styles.completed : ""}`}
          >
            {todo.text}
          </span>
          {/* <span className={styles.actions}>{todo.priority}</span> */}
        </>
      )}

      <div className={styles.actions}>
        {todo.complete ? (
          <p />
        ) : (
          <button
            className={styles.btnEdit}
            onClick={handleEdit}
            disabled={todo.complete} //Si todo.complete es true, el botón se bloquea
          >
            {isEditing ? "💾" : "✏️"}
          </button>
        )}
        {isEditing ? (
          <p />
        ) : (
          <button
            className={styles.btnDelete}
            onClick={() => deleteTodo(todo.id)}
          >
            🗑️
          </button>
        )}
      </div>
    </li>
  );
}
