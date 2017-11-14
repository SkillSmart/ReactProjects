import React from 'react';

function newPost (props) {
    return (
        <form>
            <div className={styles.InputGroup}>
                <span className={styles.InputLabel}>Title</span>
                <input type="text"/>
            </div>
            <div className={styles.InputGroup}>
                <span className={styles.InputLabel}>Content</span>
                <input type="text"/>
            </div>
            <div className={styles.InputGroup}>
                <span className={styles.InputLabel}>Author</span>
                <input type="text"/>
            </div>
        </form>
        );
};

export default newPost;
