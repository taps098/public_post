import React, {Component} from "react";
import Axios from "axios";
import styles from "../PostsFullPost/PostsFullPost.module.css";
import {Link} from "react-router-dom";
import Post from "../../components/Post/Post";

class InfiniteScrolling extends Component{
    state ={
        posts : [],
        per_page : 2,
        page : 1,
        total : null,
        selectedPostId : null,
        error : false,
        scrolling : false

    }

    componentWillMount() {
        this.loadPosts();
        this.scrollListener = window.addEventListener('scroll', (e) =>{
            this.handleScroll(e)
        })
    }

    handleScroll =() => {
        const {scrolling , total, page} = this.state;
        if (scrolling) return;
        if (total <= page) return ;

    }

    loadPosts =()=>{
        const {per_page, page, posts} = this.state;
        Axios.get('https://reqres.in/api/users?page='+page+'&per_page='+per_page)
            .then(response=>{
                console.log('InfiniteScrolling : ',response.data.data);
                const UpdatedPost = response.data.data;
                this.setState({posts : [...posts , ...UpdatedPost]})
                // this.setState({page : this.state.page + 1})
            }).catch(error =>{
            console.log('InfiniteScrolling Printing error- ',error);
        })
    }

    loadMore =()=>{
        this.setState(prevState => ({
            page : prevState.page + 1
        }), this.loadPosts)
    }

    render() {

        let posts = <p className={styles.ErrorMessage}>Something Wrong! </p>
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

        return(
            <div>
                <div className={styles.Page}>
                    {posts}
                </div>
                <a onClick = {this.loadMore}>Load More</a>
            </div>
        );
    }
}

export default InfiniteScrolling;

