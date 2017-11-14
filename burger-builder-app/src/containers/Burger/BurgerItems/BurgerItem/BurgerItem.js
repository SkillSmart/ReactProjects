import React from 'react';
import styles from './BurgerItem.css';

const burgerItem = (props) => {
    
    let ingredient = null;

    switch(props.itemType) {
        case ("bread-bottom"):
            ingredient = <div className={styles.BreadBottom}></div>;
            break;
        case ("bread-top"):
            ingredient = (
            <div className={styles.BreadTop}>
                <div className={styles.Seeds1}></div>
                <div className={styles.Seeds2}></div>
            </div>);
            break;
        case ("cheese"):
            ingredient = <div className={styles.Cheese}></div>;
            break;
        case ("bacon"):
            ingredient = <div className={styles.Bacon}></div>;
            break;
        case ("beef"):
            ingredient = <div className={styles.Beef}></div>;
            break;
        case ("salad"):
            ingredient = <div className={styles.Salad}></div>;
            break;
        default:
            break;
        
    }
    
    return ingredient;

}

export default burgerItem;