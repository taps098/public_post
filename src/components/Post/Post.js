import React, {Component} from "react";
import styles from './Post.module.css';
// import Axios from "axios";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

class Post extends Component{
    render() {
        return(
            <div className={styles.Post}>
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="example"
                            src={this.props.pic}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" onClick = {this.props.clickPost}/>,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={this.props.passingTitle}
                        // description="This is the description"
                    />
                </Card>
            </div>
        );
    }
}

export default Post;