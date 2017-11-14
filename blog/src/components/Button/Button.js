import React from 'react';
import styles from './Button.css';

function button (props) {
    let style = null;
    // Enable to produce different Styled buttons
    switch(props.btnType){
        case("more"):
            style = styles.More;
            break;
        case("danger"):
            style = styles.Danger;
            break;
        default: 
            style = styles.Button;
    };

    return (
        <button className={style}
            label={props.label}
            onClick={props.clicked}>
                {props.children}
            </button>
    );
};

export default button;