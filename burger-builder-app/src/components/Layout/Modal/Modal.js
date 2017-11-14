import React from 'react';
import classes from './Modal.css';

function modal (props) { 
    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    );
}; 

export default modal;