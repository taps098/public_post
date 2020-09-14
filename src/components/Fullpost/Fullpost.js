import React, {Component} from "react";
import styles from './Fullpost.module.css';
import Axios from "axios";

class Fullpost extends Component{

    constructor(props) {
        super(props);
    }

    state = {
        singleLoadedPost :  null
    }


    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // check if i actually need to update my component / ajax calls
    //     if(!this.state.singleLoadedPost || (this.state.singleLoadedPost && this.props.id !== nextProps.id ))
    //         return true;
    //
    //
    //     // if(this.props.id === nextProps.id)
    //     //     return false;
    //     return false;
    // }

    componentDidMount=() =>{
        console.log(this.props);
        if (this.props.match.params.id){
            if (!this.state.singleLoadedPost || (this.state.singleLoadedPost && this.state.singleLoadedPost.id !== this.props.id) )
            console.log('id in FullPost--',this.props.id);
            Axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
                .then(response => {
                    // console.log(response.data);
                    this.setState({singleLoadedPost : response.data});
                })
        }
    }

    ClickDeleteHandler = () => {
        Axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
            .then(response => {
                console.log('Deleting',response);
            })
    }

    render() {
        // cosole.log('singlePost is : 'response.data);
        // console.log("Rendering Full post")
        let postForFullPost = <p className={styles.ClickPostParagraph}>Please click on the post to load the content</p>
        if (this.props.id){
            postForFullPost = <p className={styles.Loading}>Loading...</p>
        }
        if (this.state.singleLoadedPost){
            postForFullPost = (
                <div className={styles.Fullpost}>
                    <h4>{this.state.singleLoadedPost.title}</h4>
                    <br/>
                    <p>{this.state.singleLoadedPost.body}</p>
                    <br/>
                    <button className={styles.DelbuttonFullPost} onClick={this.ClickDeleteHandler}>Delete</button>
                </div>
            );
        }

        return postForFullPost;
    }
}

export default Fullpost;