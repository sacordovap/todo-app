import { useState } from "react";
import styles from "./todo.module.css";

// Recibe un único objeto 'todo' y lo muestra
export function Todo({ todo, deleteTodo, completeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText); // Guardamos el cambio
    }
    setIsEditing(!isEditing); // Cambiamos de modo
  };

  return (
    <li className={styles.item}>
      <button onClick={() => completeTodo(todo.id)}>✓</button>
      {isEditing ? (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span className={todo.complete ? styles.completed : ""}>
          {todo.text}
        </span>
      )}
      <button
        onClick={handleEdit}
        disabled={todo.complete} //Si todo.complete es true, el botón se bloquea
      >
        {isEditing ? "Guardar" : "Editar"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
}
