import React, { Component } from 'react'
import Todolist from './TodoList/components/Todolist'
import "./App.css"
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

  render() {
    return (
      <div>
        <input type="text" placeholder='add...'/>
        <button type='submit'>add todo</button>
        <Todolist tasks={this.state.tasks} del={this.handleDelete} comp={this.handleComplete}/>
      </div>
    )
  }
}
