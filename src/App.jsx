import TaskList from "./TaskList";
import TaskForm from './TaskForm'
import { useState, useEffect } from "react";
import { tasks as data } from "./tasks";

function App() {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
     setTasks(data)
   }, [])

   function createTask(task){
      setTasks([...tasks,{
         title: task.title,
         id:tasks.length,
         description: task.description
      }])
   }

  return (
    <>
      <TaskForm createTask={createTask}/>   
      <TaskList tasks ={tasks}/>
    </>
  );
}
export default App;
