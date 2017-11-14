import React from 'react';
import styles from './BlogPost.css';

function blogPost(props) {
    return (
        <div className={styles.BlogPost}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default blogPost;
