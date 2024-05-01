import React, { useState } from 'react'
import { addTodo } from '../features/todoSlice'
import { useDispatch } from 'react-redux'

function AddTodos() {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    function add(){
        dispatch(addTodo(todo))
        setTodo("")
    }

  return (
    <div className='bg-green-200 p-2'>
      <br />
      <input type="text" className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50
      ' value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <br />
      <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={add}>AddTodo</button>
    </div>
  )
}

export default AddTodos