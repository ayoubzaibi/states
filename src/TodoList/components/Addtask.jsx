import React, { Component } from 'react'

export default class Addtask extends Component {
    state={
        newTask:""
    }

    handleChange=(e)=>this.setState({newTask:e.target.value})

    handlesubmit=(e) => {
        e.preventDefault();
        this.state.newTask===""?alert("insert a task"):this.props.add(this.state.newTask);
        this.setState({newTask:''});
    };



  render() {
    return (
      <div>
<form action="" onSubmit={this.handlesubmit}>
<input type="text" value={this.state.newTask} onChange= {this.handleChange}/>
<button type='submit'>addtask</button>
</form>
      </div>
    )
  }
}
