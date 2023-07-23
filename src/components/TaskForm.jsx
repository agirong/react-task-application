import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

export function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const valor = useContext(TaskContext)
  console.log(valor)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description)
    createTask({
        title,
        description
    });
    setTitle('')
    setDescription('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
