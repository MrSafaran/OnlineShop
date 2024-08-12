import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Store.module.css';

// Components
import Product from './shared/Product';
import Navbar from './Navbar';
import Footer from './Footer';

// Context
import { ProductsContext } from '../contexts/ProductContextProvider';

const Store = () => {
    const { products } = useContext(ProductsContext);
    const location = useLocation();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');

        if (category) {
            setFilteredProducts(products.filter(product => product.category === category));
        } else {
            setFilteredProducts(products);
        }
    }, [location.search, products]);

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Product key={product.id} ProductData={product} />
                    ))
                ) : (
                    <p className={styles.loading}>Loading...</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Store;
