import React, { useContext } from 'react';
import styles from '../../styles/Cart.module.css'

//context
import { CartContext } from '../../contexts/CartContextProvider';

const Cart = (props) => {

    const {dispatch} = useContext(CartContext)
    const {image , title , price , quantity} = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='product' />
            <div className={styles.data}>
                <h3>{title}</h3>
                <p>{price} تومان</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?  
                    <button onClick={() => dispatch({type:'DECREASE', payload: props.data})}>-</button>:
                    <button onClick={() => dispatch({type:'REMOVE_ITEM', payload: props.data})}><i class="fas fa-trash"></i></button>
                }
                <button onClick={() => dispatch({type:'INCREASE', payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;