import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar que el titulo y la descripción vengan llenos
    if (!title.trim() || !description.trim()) {
      // Verificar si el título está vacío o contiene solo espacios en blanco
      alert("Compos Titulo y Descripción son obligatorios.");
      return; // Detener el envío del formulario si el título está vacío
    }

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Tareas React</h1>
        <input
          placeholder="Escribe la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <select
          name="select"
          className="block w-full px-2 py-2 bg-white border mb-2"
        >
          <option value="0">Status...</option>
          <option value="1">ToDo</option>
          <option value="2">Doing</option>
          <option value="3">Done</option>
        </select>
        <button className="bg-indigo-500 p-3 py-1 rounded-md text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
