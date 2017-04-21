import React, {Component} from 'react'
import {Form, Icon, Input, Button, message} from 'antd';
const FormItem = Form.Item;

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    // 获取表单的值
    this.props.form.validateFields((err, values) => {
      if (!err && values.userName === localStorage.getItem('string') && values.password === localStorage.getItem('password')) {
          this.props.loginDone();
        // API接收登录，但不会校验
        // fetch_login(Object.assign({}, {action: 'login'}, formData), this.callback);
      } else {
        message.error('登录失败!');
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: '请输入用户名!'}],
          })(
            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码!'}],
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登 录
          </Button>
          或 <a onClick={this.props.isRegiste}>现在注册！</a>
        </FormItem>
      </Form>
    );
  }
}

export default LoginForm = Form.create({})(LoginForm)
