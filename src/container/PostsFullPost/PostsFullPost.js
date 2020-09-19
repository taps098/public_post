import React, {Component} from "react";
import Post from '../../components/Post/Post';
// import Fullpost from "../../components/Fullpost/Fullpost";
import Axios from "axios";
import styles from "./PostsFullPost.module.css";
import {Link} from 'react-router-dom';
import Page from '../Pagination/Pagination';
import InfiniteScrolling from "../InfiniteScrolling/InfiniteScrolling";


class PostsFullPost extends Component{

    state ={
        posts: [],
        selectedPostId : null,
        error : false,
        page : 1
    }

    componentDidMount = () =>{
        Axios.get('https://reqres.in/api/users?page=1&per_page=2')
            .then(response => {
                console.log('New data from reqres',response.data.data);
                const UpdatedPost = response.data.data;
                this.setState({posts : UpdatedPost})
                this.setState({page : this.state.page + 1})
            }).catch(error =>{
            console.log('Printing error- ',error);
        })
    }


    ClickPostHandler = (postId) =>{
        this.setState({selectedPostId: postId});
    }

    ClickPrevHandler= () =>{
        console.log('Previous is clicked the page is ', this.state.page);
        Axios.get('https://reqres.in/api/users?page='+this.state.page+'&per_page=2')
            .then(response => {
                console.log('In function ClickPrevHandler',response.data.data);
                const UpdatedPost = response.data.data;
                this.setState({posts : UpdatedPost})
                this.state.page > 1 ?
                    this.setState({page : this.state.page - 1})
                    : this.setState({page : this.state.page})

            }).catch(error =>{
            console.log('Printing error- ',error);
        })
    }
    ClickNextHandler= () =>{
        console.log('Next is clicked page is', this.state.page );
        Axios.get('https://reqres.in/api/users?page='+this.state.page+'&per_page=2')
            .then(response => {
                console.log('In function ClickNextHandler',response.data.data);
                const UpdatedPost = response.data.data;
                this.setState({posts : UpdatedPost})
                this.state.page < 6 ?
                this.setState({page : this.state.page + 1})
                    : this.setState({page : this.state.page})
            }).catch(error =>{
            console.log('Printing error- ',error);
        })
    }





    render() {

        let posts = <p className={styles.ErrorMessage}>Something went wrong! </p>
        if (!this.state.error){
            posts = this.state.posts.map(item =>{
                return (
                    <Link to = {'/'+item.id} key ={item.id}>
                        <Post
                            pic = {item.avatar}
                              passingTitle ={item.email}
                              Author = {item.first_name}
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
                <br/>
                <Page
                    onClickPrev = {this.ClickPrevHandler}
                    onClickNext = {this.ClickNextHandler}
                />
                {/*<InfiniteScrolling/>*/}
            </div>


        );
    }
}

export default PostsFullPost;