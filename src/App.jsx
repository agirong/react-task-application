import TaskList from "./components/TaskList";
import TaskForm from './components/TaskForm'
import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks";

function App() {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
     setTasks(data)
   }, [])

   //función para agregar un elemento 
   function createTask(task){
      setTasks([...tasks,{
         title: task.title,
         id:tasks.length,
         description: task.description
      }])
   }

   //función para eliminar un elemento 
   function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !==taskId))
   }

  return (
    <>
      <TaskForm createTask={createTask}/>   
      <TaskList tasks ={tasks} deleteTask={deleteTask}/>
    </>
  );
}
export default App;
