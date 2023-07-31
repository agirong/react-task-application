import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { TaskContextProvider } from "./context/TaskContext";
import React, { useState } from "react";

function App() {
  //Estado taskToEdit que almacena la tarea a editar y se pasa al TaskForm.jsx como una prop. 
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Función para establecer la tarea seleccionada para editar en el estado
  //Pasamos esta función como una prop al TaskList.jsx
  const handleSelectTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <TaskContextProvider>
      <main className="bg-zinc-900 min-h-screen flex items-center justify-center">
        <div className="container mx-auto p-10">
          <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
          <TaskList handleSelectTask={handleSelectTask} />
        </div>
      </main>
    </TaskContextProvider>
  );
}

export default App;