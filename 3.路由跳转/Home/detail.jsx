import React, { Component } from 'react'

export default class detail extends Component {

  getParams = (search)=>{
    var r = {}
    if (search == undefined) {
      search = window.location.href.split('?')[1];
    } else {
      search = search.split('?')[1];
    }
    if (!search) return;
  
    // 解决参数拼在hash前面问题
    if(search && search.indexOf("#") != '-1'){
      search = search.slice(0,search.indexOf("#"));
    }
  
    var arr = search.split('&');
    if (!arr.length) return;
  
    for (var i = 0; i < arr.length; i++) {
      var s = arr[i].split('=');
      r[s[0]] = decodeURI(s[1]);
    }
    return r;
  }

  render() {
    // 方式一 params 取值
    // const {params} = this.props.match;


    // 方式二 search 取值
    // const params = this.getParams();

    // 方式三 state 取值
    let params = this.props.location.state || {};
    console.log('this.props.location',this.props.location);

    return (
      <div>
        <p>ID:{params.id}</p>
        <p>content:{params.content}</p>
      </div>
    )
  }
}
