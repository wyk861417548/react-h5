import React, { Component } from 'react'
import Search from './Search'
import List from './List'

export default class App extends Component {
  state = {
    users:[],
  }

  updateAppState = (objState)=>{
    this.setState(objState)
    console.log('this',this.state);
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state} />
      </div>
    )
  }
}
