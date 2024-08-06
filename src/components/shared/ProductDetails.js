import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/ProductDetails.module.css';

//context
import { ProductsContext } from '../../contexts/ProductContextProvider';

const ProductDetails = (props) => {

    const data = useContext(ProductsContext);
    const id = props.match.params.id;
    const product = data[id - 1];
    const {image , price , title , description , category} = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>category:</span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price}</span>
                    <Link to='/products/'>back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;