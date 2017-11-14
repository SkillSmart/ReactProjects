import React from 'react';
import styles from './Modal.css';
import Aux from 'react-aux';

import Backdrop from './Backdrop/Backdrop';

function modal (props) {
    if(!props.visible ) {
        return <div></div>;
    }
    return (
        <Aux>
            <Backdrop 
                clicked={props.clicked}
            />
            <div className={styles.Modal}> 
                {props.children}
            </div>
        </Aux>
    );
};

export default modal;
