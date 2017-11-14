import React from 'react'
import classes from './Button.css';


function button (props) {
    let assignedClasses = [classes.Button];
    if(props.buttonType) {
        assignedClasses.push(props.buttonType)
    }

    return (
        <button className={assignedClasses.join(' ')} >{props.children}</button>
    );
}

export default button;