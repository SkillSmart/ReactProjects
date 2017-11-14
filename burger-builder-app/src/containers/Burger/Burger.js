import React, { Component } from 'react';
import styles from './Burger.css';

// Local imports
import BurgerItems from './BurgerItems/BurgerItems';
import BurgerItem from './BurgerItems/BurgerItem/BurgerItem';

class Burger extends Component {
    state = {
        ingredients : {
            salad: 0,
            tomato: 1,
            bacon: 1,
            onion: 1,
            cheese: 2,
            beef: 1,
            
        },
        totalPrice : 4,
        isPurchasable: false,
        isPurchased: false
    };

    transformedIngredients = Object.keys(this.props.ingredients).map((item, idx) => {
        return <BurgerItem 
                    key={item + idx}
                    itemType={item}></BurgerItem>
    }).reduce((arr, el) => {
        arr.concat(el);
    }, []);

    // Check if the Burger already contains elements
    

    render() {
        return (
            <BurgerItems 
                ingredients={this.transformedIngredients}
                name="test"/>
        );
    }
}

export default Burger;