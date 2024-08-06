import React, { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Shopcart.module.css'

//components
import Cart from './shared/Cart';
import Navbar from './Navbar';

//context
import { CartContext } from '../contexts/CartContextProvider';

const Shopcart = () => {
    
    const {state , dispatch} = useContext(CartContext)
    
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.cartContainer}>
                    {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
                </div>
                {
                    state.itemsCounter > 0 && <div className={styles.payments}>
                        <p><span>Total items:</span>{state.itemsCounter}</p>
                        <p><span>Total payments:</span>{state.total}</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.clear} onClick={() => dispatch({type: 'CHECkOUT'})} >checkout</button>
                            <button className={styles.checkout} onClick={() => dispatch({type: 'CLEAR'})} >clear</button>
                        </div>
                    </div>
                }
                
                {
                    state.checkout && <div className={styles.complete}>
                        <h3>Checked out successfully</h3>
                        <Link to='/products'>Buy More</Link>
                    </div>
                }
                
                {
                    !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                        <h3>Want to buy?</h3>
                        <Link to='/products'>Go to shop</Link>
                    </div>
                }
            </div>
        </>
    );
};

export default Shopcart;