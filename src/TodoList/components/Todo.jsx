import React from 'react'

const Todo = ({task,del,comp}) => {
  return (
    <div className={task.isDone?"completed":""}>
        <h1>{task.action} </h1>
        <button onClick={()=>comp(task.id)}>{task.isDone?"Undo":"Completed"}</button>
        <button onClick={()=>del(task.id)}>Delete </button>
    </div>
  )
}

export default Todo