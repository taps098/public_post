import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './Login.module.css';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogin : true,
      isRegister : false,
    }
  }
  showRegisterBox = () => {
    this.setState({
      isRegister : true,
      isLogin : false,
    })
  }
  showLoginBox = () => {
    this.setState({
      isRegister : false,
      isLogin : true,
    })
  }

  render(){

    return(
      <div>
        <div className={styles.Allbutton}>
          <button className={styles.button} onClick = {this.showLoginBox}>Login</button>
          <button className={styles.button} onClick = {this.showRegisterBox}>Register</button>
        </div>


        <div className = {styles.Allbox}>
          {this.state.isLogin && <LoginBox/>}
          {this.state.isRegister && <RegisterBox/>}
        </div>
      </div>
    );
  }
}

class LoginBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false
    };
  }
  render(){
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = values => {
      console.log('username', values.username);
      if(values.username === 'a' && values.password === 'b'){
        localStorage.setItem('token' , 'adsasfdgdfgfdsh');
        console.log('user is logged in!')
        this.setState({loggedIn : true})
      }
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    if (this.state.loggedIn){
      return <Redirect to = '/new-post'/>
    }

    return(
      <div className={styles.Box}>
        <h4 style={{color : '#40A9FF'}}>Login</h4>
        <br/><br/>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

class RegisterBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return(
      <div className={styles.Box}>
        <h4 style={{color : '#40A9FF'}}>Register</h4>
        <br/><br/>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

}

export default Login;