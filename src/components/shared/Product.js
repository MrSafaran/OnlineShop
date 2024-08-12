import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Product.module.css'

//functions
import { isInCart, quantityCount } from '../../helper/function';

//context
import { CartContext } from '../../contexts/CartContextProvider';

const Product = ({ProductData}) => {


    const {state , dispatch} = useContext(CartContext)

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={ProductData.image} />
            <h3>{ProductData.title}</h3>
            <p>تومان {ProductData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${ProductData.id}`}>جزئیات</Link>
                <div className={styles.buttonContainer}>
                    {
                        isInCart(state , ProductData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type:'INCREASE', payload:ProductData})}>+</button> :
                        <button onClick={() => dispatch({type:'ADD_ITEM', payload:ProductData})}>افزودن به سبد‌خرید</button>
                    }
                    {quantityCount(state,ProductData.id) > 0 && <span className={styles.counter}>{quantityCount(state, ProductData.id)}</span>}
                    {quantityCount(state,ProductData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type:'DECREASE', payload: ProductData  })}>-</button>}
                    {quantityCount(state,ProductData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type:'REMOVE_ITEM', payload: ProductData  })}><i class="fas fa-trash"></i></button>}

                </div>
            </div>
        </div>
    );
};

export default Product;