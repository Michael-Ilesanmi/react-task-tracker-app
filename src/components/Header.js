import React from 'react'

const Header = (props) => {
  return (
    <header className='flex justify-between items-center mb-7 '>
        <h1 className='font-bold text-xl text-gray-900'>{props.title}</h1>
        <button onClick={props.toggleForm} className={`px-3 py-2 rounded-md ${props.showForm  ? 'bg-gray-500 hover:bg-gray-300' : 'bg-green-400 hover:bg-green-300'}  text-gray-50 text-sm font-medium active:font-thin transition-all ease-out`}>Add <i className={`fas ${props.showForm  ? 'fa-close' : 'fa-plus'}`}></i></button>
    </header>
  )
}

export default Header