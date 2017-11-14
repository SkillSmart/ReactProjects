import React from 'react';
import styles from './BlogDetail.css';

function blogDetail (props) {
    if(!props.blog){
        return ("Loading...")
    }
    
    return (
        <div className={styles.BlogDetail}>
            <div className={styles.HeaderImage}>
                <img src="https://placehold.it/140x140" alt=""/>
            </div>
            <h1>{props.blog.title}</h1>
            <p>{props.blog.body}</p>
        </div>
    );
};

export default blogDetail;