import React, {Component} from 'react'
import {Form, Input, Button, Radio, InputNumber, message} from 'antd';
import {fetch_login} from '../../common/fetch'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    isSubmitting: false
  };
  // 表单提交动作
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmitting: true
    });
    // 但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        fetch_login(Object.assign({}, {action: this.props.action}, values))
          .then(() => this.callback());
      }
    });
  }

  callback = () => {
    setTimeout(()=> {
      message.success("注册成功!");
      this.setState({
        isSubmitting: false
      });
      this.props.handleRegisterDone();
    }, 1500);
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致!');
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }

  render() {
    // 用于和表单进行双向绑定
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="用户名"
          hasFeedback
        >
          {getFieldDecorator('string', {
            rules: [{
              type: 'string', message: '请输入正确的用户名!',
            }, {
              required: true, message: '请输入你的用户名!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请再次确认密码!',
            }, {
              validator: this.checkPassword,
            }]
          })(
            <Input type="password" onBlur={this.handleConfirmBlur}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="性别"
        >
          {getFieldDecorator('sex', {
            initialValue: 1
          })(
            <RadioGroup>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
              <Radio value={3}>保密</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="年龄"
        >
          {getFieldDecorator('age', {
            initialValue: 18
          })(
            <InputNumber min={1} max={999}/>
          )}
        </FormItem>
        <FormItem
          {...tailFormItemLayout}
        >
          <Button type="primary"
                  htmlType="submit"
                  size="large"
                  className='login-form-button'
                  loading={this.state.isSubmitting}>提 交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default RegistrationForm = Form.create({})(RegistrationForm)
