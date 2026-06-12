// Recibe props desde el componente TodoApp
export function TodoControllers({ task, setTask, addTodo }) {
  return (
    <div>
      {/* Al escribir, llama a setTask para actualizar en use-todo.jsx */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe tu tarea..."
      />
      {/* Al hacer clic, llama a la función addTodo que vive en use-todo.jsx */}
      <button onClick={addTodo}>Agregar</button>
    </div>
  );
}