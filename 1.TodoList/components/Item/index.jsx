import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'

export default class index extends Component {
  static propTypes = {
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired,
  }

  state = {mouse:false} //标识鼠标移入、移出

  checkedbox =(id)=>{
    return (e)=>{
      console.log('eeeeeee',e.target.checked);
      this.props.updateTodo(id,e.target.checked)
    }
  }

  handleDelete =(id)=>{
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id)
    }
  }

  handleMouse=(flage)=>{
    return ()=>{
      this.setState({
        mouse:flage
      })
    }
  }

  render() {
    const {id,name,done} = this.props;
    const {mouse}= this.state;
    return (
			<li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					<input type="checkbox" checked={done} onChange={this.checkedbox(id)} />
					<span>{name}</span>
				</label>
				<button className="btn btn-danger" onClick={()=>this.handleDelete(id)} style={{display:mouse?'block':'none'}}>删除</button>
			</li>
		)
  }

}
