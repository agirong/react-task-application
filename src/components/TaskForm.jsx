import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

//Recibimos como prop el estado y el metodo { taskToEdit, setTaskToEdit } para establecer los datos en el form. 
function TaskForm({ taskToEdit, setTaskToEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(0);
  const { createTask, editTask } = useContext(TaskContext);
  

  // UseEffect para actualizar el formulario cuando haya una tarea seleccionada
  useEffect(() => {
    //Si taskToEdit viene con un elemento seleccionado, establecemos esos datos en el form sino dejarlos vacios.
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus(0);
    }
  }, [taskToEdit]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar que el titulo y la descripción vengan llenos
    if (!title.trim()) {
      // Verificar si el título está vacío o contiene solo espacios en blanco
      alert("Título es obligatorio.");
      return; // Detener el envío del formulario si el título está vacío
    }
    if (!description.trim()) {
      // Verificar si el título está vacío o contiene solo espacios en blanco
      alert("Descripción es obligatoria.");
      return; // Detener el envío del formulario si el título está vacío
    }

    // Si hay una tarea seleccionada, llamamos a editTask() que esta definida en el Context.jsx
    if (taskToEdit) {
      editTask(taskToEdit.id, { title, description, status });
      setTaskToEdit(null); // Limpiamos el estado de tarea seleccionada
    } else {
      createTask({
        title,
        description,
        status,
      });
    }

    setTitle("");
    setDescription("");
    setStatus(0);
  };

  const handleInputChange = (e) => {
    // Lógica para manejar los cambios en el formulario (actualización del estado)
  };

  return (
    <div className="max-w-md mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-5 mb-4 rounded-md"
      >
        <h1 className="text-xl font-bold text-white mb-3">Tareas React</h1>
        <input
          placeholder="Escribe la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-2 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-2 w-full mb-1"
        ></textarea>
        <select
          name="select"
          className="block w-full p-2 bg-slate-300 mb-2"
          value={status} // Conectamos el valor del select con el estado "status"
          onChange={handleStatusChange} // Agregamos un evento onChange para actualizar el estado
        >
          <option value="0">Status...</option>
          <option value="1">ToDo</option>
          <option value="2">Doing</option>
          <option value="3">Done</option>
        </select>
        <button className="bg-green-600 p-3 py-1 rounded-md text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
