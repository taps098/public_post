import React, {Component} from "react";
import styles from './Post.module.css';
// import Axios from "axios";

class Post extends Component{
    render() {
        return(
            <div className={styles.Post} onClick = {this.props.clickPost}>
                <h6>{this.props.passingTitle}</h6>
                <h4 className={styles.Author}>{this.props.Author}</h4>
                <br/>
            </div>
        );
    }
}

export default Post;