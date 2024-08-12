import React, { createContext, useEffect, useState } from 'react';

// API
import { getProducts } from '../services/api';

// Creating context
export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        
        fetchAPI();
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;
