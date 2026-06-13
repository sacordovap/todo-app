import { Todo } from "./todo";
import { useTodo } from "./hooks/use-todo";
import { TodoControllers } from "./todo-controllers";
import styles from "./todo.app.module.css";
export function TodoApp() {
  /*Todo lo que definimos en use-todo.jsx*/
  const {
    task,
    setTask,
    addTodo,
    todos,
    priority,
    setPriority,
    filter,
    setFilter,
    remainingCount,
    noTodos,
    deleteTodo,
    completeTodo,
    editTodo,
  } = useTodo();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Aplicación de tareas</h2>

      <div className={styles.filterGroup}>
        <button
          className={`${styles.filterBtn} ${filter === "Todas" ? styles.active : ""}`}
          onClick={() => setFilter("Todas")}
        >
          Todas
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "Pendientes" ? styles.active : ""}`}
          onClick={() => setFilter("Pendientes")}
        >
          Pendientes
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "Completadas" ? styles.active : ""}`}
          onClick={() => setFilter("Completadas")}
        >
          Completadas
        </button>
      </div>

      {/* Le pasamos constantes que controla los botones/input */}
      <TodoControllers task={task} addTodo={addTodo} setTask={setTask} />
      {/* Si no hay tareas, mostramos este párrafo - if->return*/}
      {noTodos && <p className={styles.noTodos}>No hay tareas</p>}

      {/* Si hay tareas, recorremos (map) y creamos un componente <Todo /> por cada una */}
      {!noTodos && (
        <ul className={styles.list}>
          {todos.map((todo) => (
            <Todo
              key={todo.id} // Identificador
              todo={todo} // Le pasamos la tarea individual al componente
              /*Se pasan las funciones que definimos en useTODO */
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
