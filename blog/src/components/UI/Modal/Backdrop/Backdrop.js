import React from 'react';
import styles from './Backdrop.css';

function backdrop (props) {
    return (
        <div className={styles.Backdrop}
            onClick={props.clicked}
            />
    );
}

export default backdrop;