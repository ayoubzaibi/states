import React from 'react'
import Todo from './Todo'

const Todolist = ({tasks,del,comp}) => {
    console.log(tasks)
  return (
    <div>
        {
            tasks.map(el=><Todo task={el} key={el.id} del={del} comp={comp}/> )
        }
    
    </div>
  )
}

export default Todolist