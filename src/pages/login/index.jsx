import React,{Component} from 'react';


import LoginForm from '../../components/login-form';
import {reqLogin} from '../../api';

import logo from '../../assets/images/logo.png';
import './index.less';



export default class Login extends React.Component{
  state = {
    errMsg:''
  };


  login = async(username,password) =>{

    const result = await reqLogin(username,password);
    console.log(result);
    if(result.status===0){

      this.props.history.replace('/');
    }else{
      this.setState({
        errMsg:result.msg
      })
    }
  };

  render(){
    const {errMsg} = this.state;
    const height = errMsg ? 30 : 0;
    return (
        <div className="login">
          <header className="login-header" >
            <img src={logo} alt="logo"/>
            <h1>React项目：后台管理系统</h1>
          </header>
          <section className="login-form">
            <div className="err-meg" style={{height}}>{errMsg}</div>
            <h2>用户登录</h2>
            <LoginForm login={this.login}/>
          </section>
        </div>
    )
  }
}