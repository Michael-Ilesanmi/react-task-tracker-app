import {useState} from 'react'
function AddTask({onAdd}) {
const [title, setTitle] = useState('')
const [time, setTime] = useState('')
const [reminder, setReminder] = useState(false)
const onSubmit = (e) =>{
    e.preventDefault()
    onAdd({title,time,reminder})
    setTitle('')
    setTime('')
    setReminder(false)
}
  return (
    <form className='mb-5' onSubmit={onSubmit}>
        <div className='flex flex-col mb-3'>
            <label className='font-medium text-sm mb-2'>Task Title</label>
            <input type="text" required className='px-3 py-2 text-sm font-normal rounded-none border border-gray-500 focus:border-gray-600 focus:border ' placeholder="Add Task" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className='flex flex-col mb-3'>
            <label className='font-medium text-sm mb-2'>Day & Time</label>
            <input type="text" required className='px-3 py-2 text-sm font-normal rounded-none border border-gray-500 focus:border-gray-600 focus:border ' placeholder="Day & Time" value={time} onChange={(e)=>setTime(e.target.value)} />
        </div>
        <div className='flex flex-row items-center my-3'>
            <label className='font-medium text-sm mr-3'>Set Reminder</label>
            <input checked={reminder} type="checkbox" className='p-2 rounded-none border border-gray-500 focus:border-gray-600 focus:border ' value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" className='bg-green-400 w-full py-2 text-sm font-medium text-gray-50' value='Add Task' />
    </form>
  )
}

export default AddTask