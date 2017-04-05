import React, {Component, PropTypes} from 'react'
import {Modal, Icon, Form, Input, Button, Checkbox} from 'antd'
import WrappedNormalLoginForm from './LoginForm'
import '../style/Login'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal dialog',
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
      ModalText: 'The modal dialog will be closed after two seconds',
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
    console.log('Clicked cancel button');
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div className="login">
        <div onClick={this.showModal}>
          <Icon type="user" className='login_icon'/>
          登录
        </div>
        <Modal title="Title of the modal dialog"
               visible={this.state.visible}
               onOk={this.handleOk}
               confirmLoading={this.state.confirmLoading}
               onCancel={this.handleCancel}
        >
          <WrappedNormalLoginForm/>
        </Modal>
      </div>
    );
  }
}
