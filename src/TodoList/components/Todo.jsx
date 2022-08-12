import React from 'react'

const Todo = ({task,del}) => {
  return (
    <div>
        <h1>{task.action} </h1>
        <button>{task.isDone?"Undo":"Completed"}</button>
        <button onClick={()=>del(task.id)}>Delete </button>
    </div>
  )
}

export default Todo