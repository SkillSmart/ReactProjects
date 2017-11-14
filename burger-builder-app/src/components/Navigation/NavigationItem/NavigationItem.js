import React from 'react';
import classes from './NavigationItem.css';


function navigationItem (props) {
    return (
        <li className={classes.NavigationItem}>{props.children}</li>
    );  
};

export default navigationItem;