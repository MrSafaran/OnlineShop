import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Shopcart.module.css'

//components
import Cart from './shared/Cart';
import Navbar from './Navbar';

//context
import { CartContext } from '../contexts/CartContextProvider';
import Footer from './Footer';

const Shopcart = () => {
    const {state , dispatch} = useContext(CartContext)
    
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                { state.itemsCounter > 0 &&
                    <div className={styles.cartContainer}>
                        {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
                    </div>

                }
                {
                    state.itemsCounter > 0 && <div className={styles.payments}>
                        <h2>صورتحساب خرید</h2>
                        <p><span> مجموع کالا ها:   </span>{state.itemsCounter}</p>
                        <p><span>مجموع پرداختی:   </span> {state.total}</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.clear} onClick={() => dispatch({type:'CHECKOUT'})} >پرداخت</button>
                            <button className={styles.checkout} onClick={() => dispatch({type:'CLEAR'})} >حذف</button>
                        </div>
                    </div>
                }
                
                {
                    state.checkout && <div className={styles.complete}>
                        <h3>پرداخت با موفقیت انجام شد!</h3>
                        <Link to='/products'>خرید مجدد!</Link>
                    </div>
                }
                
                {
                    !state.checkout  && !(state.itemsCounter > 0)  && <div className={styles.complete}>
                        <h3>خرید از فروشگاه؟</h3>
                        <Link to='/products'>مشاهده محصولات</Link>
                    </div>
                }
            </div>
            <Footer/>
        </>
    );
};

export default Shopcart;