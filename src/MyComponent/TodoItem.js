import React from 'react'
export default function TodoItem({todo, onDelete}) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <h4>{todo.desc}</h4>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button> <hr />
    </div>
  )
}
