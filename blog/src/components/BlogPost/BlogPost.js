import React from 'react';
import Aux from 'react-aux';
import styles from './BlogPost.css'

function blogPost(props) {
    return (
        <Aux>
            <div className={styles.BlogPost}
                onClick={props.clicked}>
                <img src={props.headerImg} alt={props.title}/>
                <div className={styles.BlogBody}>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
        </Aux>
    );
}

export default blogPost;
