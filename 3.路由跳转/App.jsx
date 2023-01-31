import React, { Component } from 'react'
import { NavLink,Link,Route,Redirect,Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">

					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							{/* <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink> */}

							<MyNavLink replace activeClassName="atguigu" className="list-group-item" to="/about">About1</MyNavLink>
							<MyNavLink replace activeClassName="atguigu" className="list-group-item" to="/home">Home1</MyNavLink>


						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
                <Switch>
                  <Route  path="/about" component={About}/>
                  <Route  path="/home" component={Home}/>
                </Switch>

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}