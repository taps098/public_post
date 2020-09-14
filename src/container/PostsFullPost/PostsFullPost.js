import React, {Component} from "react";
import Post from '../../components/Post/Post';
import Fullpost from "../../components/Fullpost/Fullpost";
import Axios from "axios";
import styles from "./PostsFullPost.module.css";
import {Link} from 'react-router-dom';


class PostsFullPost extends Component{

    state ={
        posts: [{name: "Taps", deatils: "something", a: 5, b: 3}],
        selectedPostId : null,
        error : false
    }

    componentDidMount = () =>{
        // console.log(this.props);
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const UpdatedPost = posts.map(post =>{
                    return {
                        ...post,
                        Author : 'Taps'
                    }

                })
                this.setState({posts : UpdatedPost})
                console.log(this.props.posts);
            }).catch(error =>{
            console.log('Printing error- ',error);
            // this.setState({error: true});
        })
    }



    ClickPostHandler = (postId) =>{
        // console.log('single post is clicked', {postId});
        this.setState({selectedPostId: postId});
        // console.log('updated state :',this.state.selectedPostId);
    }



    render() {

        let posts = <p className={styles.ErrorMessage}>Something went wrong! </p>
        if (!this.state.error){
            posts = this.state.posts.map(item =>{
                return (
                    <Link to = {'/'+item.id} key ={item.id}>
                        <Post
                              passingTitle ={item.title}
                              Author = {item.Author}
                              clickPost = {() => this.ClickPostHandler(item.id)}
                        />
                    </Link>
                );

            })
        }


        

        return (
            <div>
                <div className={styles.Page}>
                    {posts}
                </div>
                {/*<div>*/}
                {/*    <Fullpost id = {this.state.selectedPostId}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>


        );
    }
}

export default PostsFullPost;