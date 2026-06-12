import { useState } from "react";

/* "Hook personalizado": guarda los datos*/
export function useTodo() {
  const [task, setTask] = useState(""); /*guarda el input*/
  const [todos, setTodos] = useState([]); /*guarda la lista completa de tarea*/

  const noTodos = todos.length === 0; /*Hay tareas? */
  /*Crear tarea */
  const addTodo = () => {
    if (!task.trim()) return; /*Si el texto está vacío, no hacemos nada*/

    const newTodo = {
      id: Date.now(), // ID basado en el tiempo
      text: task, // Usa lo que escribiste en el input
      complete: false, // Empieza como incompleta
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
    todos,
    noTodos,
    addTodo,
    deleteTodo,
    completeTodo,
    editTodo
  };
}
