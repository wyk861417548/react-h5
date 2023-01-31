import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid'
import './index.css'

export default class index extends Component {
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}

  handleKeyUp =(e)=>{
    const {target,keyCode} = e;
    if(keyCode !== 13)return;

    if(target.value.trim() === ''){
      alert("不允许为空");
      return;
    }

    this.props.addTodo({id:nanoid(),name:target.value.trim(),done:false})
    target.value = '';
  }
}
