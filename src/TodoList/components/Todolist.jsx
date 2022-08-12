import React from 'react'
import Todo from './Todo'

const Todolist = ({tasks,del}) => {
    console.log(tasks)
  return (
    <div>
        {
            tasks.map(el=><Todo task={el} key={el.id} del={del} /> )
        }
    </div>
  )
}

export default Todolist