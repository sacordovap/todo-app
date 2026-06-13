import { useEffect, useState } from "react";

/* "Hook personalizado": guarda los datos*/
export function useTodo() {
  const [task, setTask] = useState(""); /*guarda el input*/

  const [priority, setPriority] = useState("Media");
  const [filter, setFilter] = useState("Todas");

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("my-todo");
    return saved ? JSON.parse(saved) : [];
  }); /*guarda la lista completa de tarea*/

  const noTodos = todos.length === 0; /*Hay tareas? */

  useEffect(() => {
    localStorage.setItem("my-todo", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((t) => {
    if (filter === "Pendientes") return !t.complete;
    if (filter === "Completadas") return t.complete;
    return true;
  });

  const remainingTodo = todos.filter((t) => !t.complete).length;

  /*Crear tarea */
  const addTodo = () => {
    if (!task.trim()) return; /*Si el texto está vacío, no hacemos nada*/

    const newTodo = {
      id: Date.now(), // ID basado en el tiempo
      text: task, // Usa lo que escribiste en el input
      complete: false, // Empieza como incompleta
      priority: priority,
    };

    setTodos([
      ...todos,
      newTodo,
    ]); /*Crea una nueva lista con las anteriores + la nueva*/
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  /*Aquí devolvemos todo lo necesario para funcionar*/
  return {
    task,
    setTask,
    todos: filteredTodos,
    priority,
    setPriority,
    filter,
    setFilter,
    remainingTodo,
    noTodos,
    addTodo,
    deleteTodo,
    completeTodo,
    editTodo,
  };
}
