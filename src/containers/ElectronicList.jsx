import React from 'react';
import ProductItem from '../components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/categories/2/products';

const ElectronicList = () => {
    const electronic = useGetProducts(API)
    return(
        <section className='main-container'>
        <div className="ProductList">
            {electronic.map(product => (
            <ProductItem product={product} key={product.id} />
            ))}	
        </div>
    </section>
    );
}

export default ElectronicList;