import styles from "./TodoControllers.module.css";
import { ToastContainer, toast, Slide } from "react-toastify";
export function TodoControllers({
  task,
  setTask,
  addTodo,
  priority,
  setPriority,
}) {
  const handleAdd = () => {
    if (task.trim() === "") {
      toast.error("No se puede agregar una tarea en blanco", {
        transition: Slide,
      });
      return;
    }
    toast.success("Tarea agregada", {
      transition: Slide,
    });
    addTodo();
  };

  return (
    <div className={styles.container}>
      <ToastContainer position="top-center" autoClose={1500} />
      <input
        className={styles.input}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe tu tarea..."
      />

      <select
        className={styles.select}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>

      <button className={styles.button} onClick={handleAdd}>
        Agregar
      </button>
    </div>
  );
}
