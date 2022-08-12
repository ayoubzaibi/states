import React, { Component } from 'react'
import Todolist from './TodoList/components/Todolist'

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

  render() {
    return (
      <div>
        <Todolist tasks={this.state.tasks} del={this.handleDelete} />
      </div>
    )
  }
}
