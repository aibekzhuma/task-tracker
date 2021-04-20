import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'
function App() {
  const [tasks, setTasks] = useState([
    {
    id: 24,
    text: "FoodNetwork",
    day: 'Feb 5th at 2:40'
    },
        {
    id: 4,
    text: "FoodNetwork",
    day: 'Feb 5th at 2:40'
    },
    {
    id: 14,
    text: "FoodNetwork",
    day: 'Feb 5th at 2:40'
    }
])

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}
  return (
    <div className="container">
        <Header />
        <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
