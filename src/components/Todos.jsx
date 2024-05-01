import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <div className='bg-blue-200 p-4'>
        {todos.map((todo)=> (
            <li className='style-none' key={todo.id}>
                {todo.text}
            
                <button onClick={()=> dispatch(removeTodo(todo.id))}> Delete
                </button>
            </li>
        ))}
    </div>
  )
}

export default Todos