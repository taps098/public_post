import React, {Component} from "react";
import styles from './Newpost.module.css';
import Axios from "axios";
import { Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

class Newpost extends Component{
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    let loggedIn = true;

    if (token === null){
      loggedIn = false;
    }

    this.state = {
      inputData : {title : null, content : null, author : null},
      submitted : false,
      loggedIn
    }
  }


    render() {
      const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      const onFinish = values => {
        console.log('username', values);
        const newData = {...values}
        this.setState({
          inputData : newData
        })
        Axios.post('https://jsonplaceholder.typicode.com/posts', newData)
                .then(response => {
                        console.log('Adding new post',response);
                        this.setState({submitted:true})
                })
      };

      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };


        if(this.state.loggedIn === false){
          return <Redirect to ='/login'/>
        }
        // let redirect = null;
        // if(this.state.submitted){
        //     redirect = <Redirect to = '/'/>;
        // }

        return (
            <div className={styles.Newpost}>
                {/*{redirect}*/}
                <h4>Add a new post here </h4>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>

                <Form.Item name="author" label="Author" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>

                <Form.Item name="content" label="Content" rules={[{ required: true }]}>
                  <Input />
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

export default Newpost;