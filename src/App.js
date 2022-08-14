import React, { Component } from 'react'
import Todolist from './TodoList/components/Todolist'
import "./App.css"
import Addtask from './TodoList/components/Addtask'
export default class App extends Component {
state={
  tasks:[
    {
      id:Math.random(),action:"learn js",isDone:false
    },
    {
      id:Math.random(),action:"learn html",isDone:false
    },
    {
      id:Math.random(),action:"learn react",isDone:false
    },
  ]
}

handleDelete=(x)=>{this.setState({tasks:this.state.tasks.filter(el=>el.id!==x)})}

handleComplete=(x)=>{this.setState({tasks:this.state.tasks.map(el=>(el.id===x?{...el,isDone:!el.isDone}:el))})}

handleAdd=(input)=>{
  const newTask={
    id:Math.random(),
    action:input,
    isDone:false

  }
  this.setState({tasks:[newTask,...this.state.tasks]})
}

  render() {
    return (
      <div>
        <Addtask add={this.handleAdd} />
        <Todolist tasks={this.state.tasks} del={this.handleDelete} comp={this.handleComplete}/>
      </div>
    )
  }
}
