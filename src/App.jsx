import React, { Component } from 'react'
import Count from './components/Count'
import CountRedux from './components/Count_redux'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Count></Count> */}
        <CountRedux></CountRedux>
      </div>
    )
  }
}
