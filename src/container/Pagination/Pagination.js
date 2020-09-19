import React from "react";
import {Button} from 'antd';
import styles from './Pagination.module.css'

function Page (props){
    return (
        <div className={styles.Page}>
            <Button style={{margin: '10px',width:'80px'}} onClick={props.onClickPrev}>Previous</Button>
            <Button style={{margin: '10px',width:'80px'}} onClick={props.onClickNext}>Next</Button>
        </div>
    );
}

export default Page;