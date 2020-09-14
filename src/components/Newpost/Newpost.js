import React, {Component} from "react";
import styles from './Newpost.module.css';
import Axios from "axios";
import {Redirect} from 'react-router-dom';

class Newpost extends Component{
    state = {
        Title : null,
        Content : null,
        Author : null,
        submitted : false
    }

    //posting data to server using Axios
    newPostHandler =() => {
        const newDtata = {
            Title : this.state.Title,
            Content : this.state.Content,
            Author : this.state.Author
        }
        Axios.post('https://jsonplaceholder.typicode.com/posts', newDtata)
            .then(response => {
                    console.log('Adding new post',response);
                    this.setState({submitted:true})
            })
    }


    render() {
        let redirect = null;
        if(this.state.submitted){
            redirect = <Redirect to = '/'/>;
        }
        

        
        return (
            <div className={styles.Newpost}>
                {redirect}
                <p>Add a new post here </p>
                <label>
                    <h5>Title</h5>
                    <br/>
                    <textarea value = {this.state.Title} onChange={(event)=>{this.setState({Title: event.target.value})}} cols="75" rows="2"></textarea>
                </label>
                {/*<h5>Title</h5>*/}

                <br/>
                <label>
                    <h5>Content</h5>
                    <br/>
                    <textarea value = {this.state.Content} onChange={(event) => {this.setState({Content : event.target.value})}} cols="100" rows="5"></textarea>
                </label>
                <label>
                    <h5>Author</h5>
                    <br/>
                    <textarea value = {this.state.Author} onChange={(event) => {this.setState({Author: event.target.value})}} cols="75" rows="2"></textarea>
                </label>
                <br/>
                <button className={styles.AddbuttonFullPost} onClick={this.newPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default Newpost;