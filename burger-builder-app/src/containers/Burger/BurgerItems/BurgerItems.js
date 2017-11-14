import React from 'react';
import styles from './BurgerItems.css';

import BurgerItem from './BurgerItem/BurgerItem';

function burgerItems (props) {

    return (
        <div className={styles.BurgerItems}>
            <BurgerItem itemType="bread-top"/>
            {props.ingredients}
            <BurgerItem itemType="bread-bottom"/>
        </div>
    );
};

export default burgerItems;
