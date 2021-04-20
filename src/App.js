import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
function App() {
  const [tasks, setTasks] = useState([
    {
    id: 24,
    text: "FoodNetwork",
    day: 'Feb 5th at 2:40',
    reminder: true
    },
        {
    id: 4,
    text: "FoodNetwork",
    day: 'Feb 5th at 2:40',
    reminder: false
    },
    {
    id: 14,
    text: "FoodNetwork",
    day: 'Feb 5th at 2:40',
    reminder: true
    }
])
const addTask = (task)=>{
  console.log(task)
}

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>{
    return task.id === id ? {...task, reminder: !task.reminder} : task
  }))
}
  return (
    <div className="container">
        <Header />
        <AddTask onAdd={addTask}/>
        {tasks.length > 0 ? <Tasks
         tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          />: "No Tasks To Show"}
    </div>
  );
}

export default App;
