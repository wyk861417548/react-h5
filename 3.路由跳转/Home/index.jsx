import React, { Component } from 'react'
import {Route,Switch,Redirect, Link} from 'react-router-dom'
import Detail from './detail'

const DetailData = [
  {id:'01',content:'你好，中国'},
  {id:'02',content:'你好，尚硅谷'},
  {id:'03',content:'你好，未来的自己'}
]
export default class Home extends Component {

  pushShow = (id,title)=>{
    //push跳转+携带params参数
		// this.props.history.push(`/home/detail/${id}/${title}`)

		//push跳转+携带search参数
		// this.props.history.push(`/home/detail?id=${id}&title=${title}`)

    //push跳转+携带state参数
    this.props.history.push(`/home/detail`,{id,title})
  }

	render() {
		return (
				<div>
					<h3>我是Home的内容</h3>

          {
            DetailData.map(item=>{
              return (
                <div key={item.id}>
                  {/* 方式一  params传参*/}
                  {/* <Link to={`/home/detail/${item.id}/${item.content}`}>content:{item.content}</Link> */}

                  {/* 方式二  search传参*/}
                  {/* <Link to={`/home/detail?id=${item.id}&content=${item.content}`}>content:{item.content}</Link> */}
                  {/* 方式三 state传参 */}
                  <p style={{cursor:'pointer'}} onClick={()=>this.pushShow(item.id,item.content)}>{item.content}编程路由跳转</p>
                  <Link to={{pathname:'/home/detail',state:{id:item.id,content:item.content}}}>{item.content}</Link>
                </div>
              )
            })
          }

          {/* 方式一  params接收值*/}
          {/* <Route path='/home/detail/:id/:content' component={Detail}></Route> */}

          {/* 方式二 search接收值 */}
          {/* <Route path='/home/detail' component={Detail}></Route> */}

          {/* 方式三 state接收值 */}
          <Route path='/home/detail' component={Detail}></Route>
				</div>
			)
	}
}
