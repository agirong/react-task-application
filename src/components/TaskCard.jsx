import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  console.log(task.status)

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <h3 style={task.status == 1 ? { background: "cadetblue" } : task.status ==2?{background: "coral"}:task.status==3?{background: "lightgreen"}:{background: "gray"}} className="rounded-md">{task.status == 1?"ToDo":task.status ==2?"Doing":task.status==3?"Done":"Status..."}</h3>
      <div className="flex flex-1 justify-between">
      <button className="bg-orange-500 px-2 py-1 rounded-md mt-4 hover:bg-orange-300" onClick={() => deleteTask(task.id)}>Editar Tarea</button>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
      </div>
    </div>
  );
}

export default TaskCard;
