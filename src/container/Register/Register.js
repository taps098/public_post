import React from "react";
import styles from "./Register.module.css";
import 'antd/dist/antd.css';
import { Form, Input, Checkbox,Row, Col } from 'antd';
import Axios from "axios";

const { TextArea } = Input;

class Register extends React.Component{
    state = {
        name : null,
        email : null,
        password : null,
        phone : null,
        about : null
    }
    submitClickedHandler =(event) => {

        const submittedData = {
            email : this.state.email,
            password : this.state.password
        }
        console.log('submit button is clicked')
        alert('A name was submitted: ' + this.state.name);
        // event.preventDefault();
        Axios.post('https://reqres.in/api/register',submittedData)
            .then(response =>{
                console.log('form submitted response ',response);
            });
    }
    render() {
        return (
            <Row>
                <Col  span={12} offset={6}>

                <Form className={styles.Register} onFinish={this.submitClickedHandler}>
                    <label>
                        <h5>Name:</h5>
                        <Input type="text" value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}}/>
                    </label>

                    <label>
                        <h5>Email:</h5>
                        <Input type="email" vlaue = {this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
                    </label>

                    <label>
                        <h5>Password:</h5>
                        <Input type="password" vlaue = {this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}}/>
                    </label>

                    <label>
                        <h5>Phone:</h5>
                        <Input type="text" value = {this.state.phone} onChange={(event)=>{this.setState({phone:event.target.value})}}/>
                    </label>
                    <label>
                        <h5>About:</h5>
                        <TextArea value={this.state.about} cols="40" rows="5" onChange={event => {this.setState({about : event.target.value})}}/>
                    </label>
                    <Form.Item style={{ width: 100 , display: 'flex' ,marginLeft: '300px'}}>
                        <Input type="submit" value='Submit'/>
                    </Form.Item>
                    {/*<input type="submit" value='Submit'/>*/}

                </Form>
                </Col>
            </Row>
        );
    }
}

export default Register;