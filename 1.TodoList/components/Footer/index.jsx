import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    const {todos} = this.props;

    //已完成的个数
		const doneCount = todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
    console.log('doneCount',doneCount);
    const total = todos.length;
    return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.checkedAllDone} checked={total === doneCount & total!==0?true:false} />
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
  }

  handleClearAllDone =()=>{
    this.props.clearAllDone()
  }

  checkedAllDone =(e)=>{
    console.log('e.target.checked',e.target.checked);
    this.props.checkAllTodo(e.target.checked)
  }
}
