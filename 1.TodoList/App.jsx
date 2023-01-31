import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state ={
    todos:[
      {id:1,name:'吃饭',done:false},
      {id:2,name:'睡觉',done:false},
      {id:3,name:'打豆豆',done:false},
    ]
  }

  // 新增todo
  addTodo = (todo)=>{
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }

  // 更改完成状态
  updateTodo=(id,done)=>{
    const {todos} = this.state;

    const newTodos = todos.map(todo=>{
      if(id === todo.id){
        return {...todo,done}
      }
      return todo;
    })
    
    this.setState({todos:newTodos})
  }

  // 删除某个todo
  deleteTodo=(id)=>{
    const {todos} = this.state;
    const newTodos = todos.filter(todo=>{
      if(id !== todo.id){
        return todo;
      }
    })
    this.setState({todos:newTodos})
  }

  // 全选
  checkAllTodo =(done)=>{
    const {todos} = this.state;
    const newTodos = todos.map(todo=>{
      return {...todo,done}
    })
    this.setState({todos:newTodos})
  }

  // 清除选中已勾选的
  clearAllDone =()=>{
    const {todos} = this.state;
    const newTodos = todos.filter(todo=>{
      if(!todo.done){
        return todo;
      }
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
				</div>
			</div>
    )
  }
}
