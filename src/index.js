// 引入react核心课
import React from "react";
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App组件
import App from './App'

import store from './redux/store'

// 引入路由
import {BrowserRouter} from 'react-router-dom'

// 渲染App到页面

store.subscribe(()=>{
	ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))
})
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))
