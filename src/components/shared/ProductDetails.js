import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/ProductDetails.module.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

// Context
import { ProductsContext } from '../../contexts/ProductContextProvider';

const ProductDetails = () => {
    const { products } = useContext(ProductsContext);
    let { id } = useParams();
    id = parseInt(id, 10); // Ensure id is an integer
    const product = products.find(p => p.id === id);
    // Check if product exists
    if (!product) {
        return <div className={styles.loading}>Loading...</div>;
    }

    const { image , price , title, description , category } = product;

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <img className={styles.image} src={image} alt={title} />
                <div className={styles.textContainer}>
                    <h3>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.category}><span>دسته‌بندی:</span> {category === 'boy' ? "پسرونه" : "دخترونه"}</p>
                    <div className={styles.buttonContainer}>
                        <span className={styles.price}>تومان {price}</span>
                        <Link to='/products/'>بازگشت به فروشگاه</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};


export default ProductDetails;
