import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//Recibimos como prop la función handleSelectTask() desde App.jsx 
function TaskList({ handleSelectTask }) {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
      {tasks.map((task) => (
        //Pasamos como porp la función handleSelectTask() al TaskCard.jsx
        <TaskCard key={task.id} task={task} handleSelectTask={handleSelectTask} />
      ))}
    </div>
  );
}

export default TaskList;