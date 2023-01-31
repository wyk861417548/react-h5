import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
  search =()=>{
    const {keyWordElement:{value:keyWord}} = this;
    console.log('key',keyWord);

    axios.get(`/api1/search/users?q=${keyWord}`).then(({data}) => {
      this.props.updateAppState({users:data.items})
    }).catch((err) => {
      this.props.updateAppState({err:err})
    });
  }

  render() {
    return (
      <section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
    )
  }
}
