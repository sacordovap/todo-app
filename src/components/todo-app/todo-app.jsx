import { Todo } from "./todo";
import { useTodo } from "./hooks/use-todo";
import { TodoControllers } from "./todo-controllers";

export function TodoApp() {
  /*Todo lo que definimos en use-todo.jsx*/
  const {
    task,
    setTask,
    addTodo,
    todos,
    noTodos,
    deleteTodo,
    completeTodo,
    editTodo,
  } = useTodo();

  return (
    <div>
      <h2>Aplicacion de tareas</h2>

      {/* Le pasamos constantes que controla los botones/input */}
      <TodoControllers task={task} addTodo={addTodo} setTask={setTask} />

      {/* Si no hay tareas, mostramos este párrafo - if->return*/}
      {noTodos && <p>No hay tareas</p>}

      {/* Si hay tareas, recorremos (map) y creamos un componente <Todo /> por cada una */}
      {!noTodos && (
        <ul>
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
