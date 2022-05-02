export const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`bg-gray-300 py-2 px-4 my-2 flex justify-between items-center cursor-pointer ${task.reminder ? "border-l-4 border-green-400" : " "}`} onDoubleClick={() => onToggle(task.id)}>
        <div>
            <h2 className="text-lg font-medium text-gray-800">{task.title}</h2>
            <p className="text-sm text-gray-500">{task.time}</p>
            <small>
                {task.reminder}
            </small>
        </div>
        <i className="fas fa-times text-red-500 cursor-pointer" onClick={() => onDelete(task.id)}></i>
    </div>
  )
}

export default Task
