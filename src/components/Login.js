import React, {Component, PropTypes} from 'react'
import {Modal, Icon, Form, Input, Button, Checkbox} from 'antd'
import WrappedNormalLoginForm from './LoginForm'
import WrappedRegistrationForm from './Register'

import '../style/Login'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegister: false,
      visible: false,
      confirmLoading: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  }

  handleCancel = () => {
    this.setState({
      visible: false
    });
  }

  handleRegiste = () => {
    this.setState({
      isRegister: true
    });
  }
  handleBack = () => {
    this.setState({
      isRegister: false
    });
  }

  render() {
    return (
      <div className="login">
        <div onClick={this.showModal}>
          <Icon type="user" className='login_icon'/>
          登录
        </div>
        <Modal title={ this.state.isRegister ?
          <div style={{position: 'relative'}}>
            <span
              className='modal_back'
              onClick={this.handleBack}
            >
              <Icon type="arrow-left"/>
            </span>
            注册
          </div> : '登录'}
               visible={this.state.visible}
               confirmLoading={this.state.confirmLoading}
               footer={null}
               onCancel={this.handleCancel}
        >
          { this.state.isRegister ? <WrappedRegistrationForm /> :
            <WrappedNormalLoginForm isRegiste={this.handleRegiste}/> }
        </Modal>
      </div>
    );
  }
}
