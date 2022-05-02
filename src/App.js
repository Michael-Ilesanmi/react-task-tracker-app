import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"

function App() {
  const [show, setShow] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            title: 'Learn React',
            time: 'January 25, 3 p.m.' ,
            reminder: true
        },
        {
            id: 2,
            title: 'Go Shopping',
            time: 'January 27, 12 noon' ,
            reminder: false
        },
        {
            id: 3,
            title: 'Play ball',
            time: 'February 12, 11 a.m.' ,
            reminder: true
        },
    ]
  )
  const deleteTask = (id) =>{
      setTasks(tasks.filter((task)=> task.id !== id))
  }
  const addTask = (task) =>{
    const id = tasks.length + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(tasks)
  }
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="p-3 md:p-5 rounded-lg border border-green-300 mx-7 mt-12 md:m-12">
      <div>
        <Header title='React Task Tracker' showForm={show} toggleForm={()=>{setShow(!show)}} />
        {show && <AddTask onAdd={addTask} />}
        {tasks.length > 0 &&
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        }
        {tasks.length <1 &&
          <p className='font-medium text-red-400 text-sm'>
            No tasks found
          </p>}
      </div>
      <footer className='absolute bottom-0 left-0 right-0 text-center text-gray-blue text-sm pb-3 hover:text-gray-700 max-w-fit mx-auto'><a href='https://github.com/Michael-Ilesanmi' rel='noreferrer' target='_blank'>©_localdev</a></footer>
    </div>
  );
}

export default App;
