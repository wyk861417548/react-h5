import React, { Component } from 'react'

export default class index extends Component {
  state={count:0}

  increment =()=>{
    let {value} = this.selectNumber;
    let {count} = this.state;
    this.setState({count:count+value*1})
  }
  decrement =()=>{
    let {value} = this.selectNumber;
    let {count} = this.state;
    this.setState({count:count-value*1})
  }
  incrementIfOdd =()=>{
    let {value} = this.selectNumber;
    let {count} = this.state;
    if(count%2 === 1){
      this.setState({count:count+value*1})
    }
  }
  incrementAsync =()=>{
    let {value} = this.selectNumber;
    let {count} = this.state;
    setTimeout(()=>{
      this.setState({count:count+value*1})
    },500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <select ref={c=>this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
