import React,{Component} from 'react';
import {
  Form, Icon, Input, Button
} from 'antd';

const Item = Form.Item;


class LoginForm extends Component{
  checkPassword =(rule, value, callback)=>{
    if (!value){
      callback('必须输入密码');
    }else if(value.length <4){
      callback('密码长度必须超过4位');
    }else if(value.length >11){
      callback('密码长度必须小于11位');
    }else if(!(/^[a-zA-Z0-9_]+$/.test(value))){
      callback('密码只能包含大小写英文、数字或者下划线')
    }else{
      callback()
    }
  };

  render(){
    const {getFieldDecorator} = this.props.form;
    return (
      <Form className="login-form-container">
        <Item>
          {
            getFieldDecorator('username',{
              rules: [
                { required: true, message: '请输入用户名!' },
                {max:11,message:'用户名长度不得少于四位'},
                {min:4,message:'用户名长度不得少于四位'},
                {pattern:/^[a-zA-Z0-9]+$/,message:'用户名包括大小写英文字母，数字和下划线。'}
                ],
              })(
              <Input prefix={<Icon type="user"/>} placeholder="用户名" />
            )
          }
        </Item>
        <Item>
          {
            getFieldDecorator('password',{
              rules: [
                'password',
                {
                  rules:[
                    {validator: this.checkPassword}
                  ]
                }
              ],
            })(
              <Input prefix={<Icon type="safety"/>} placeholder="密码" />
            )
          }
        </Item>
        <Item>
          <Button type="primary" className='login-form-button'>登录</Button>
        </Item>
      </Form>
    )
  }
}

const WrappedNormalLoginForm =Form.create()(LoginForm);

export default WrappedNormalLoginForm;