import React, { useContext } from 'react';
import styles from '../styles/Store.module.css'

//components
import Product from './shared/Product';
import Navbar from './Navbar';
import Footer from './Footer';

//context
import { ProductsContext } from '../contexts/ProductContextProvider';


const Store = () => {

    const products = useContext(ProductsContext)
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                {
                    products.map( product => <Product key={product.id} ProductData={product}/>)
                }
                
            </div>
            <Footer/>
        </>
    );
};

export default Store;