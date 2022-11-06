import React from 'react'
import ProductItem from '../components/ProductItem'
import useGetProducts from '../hooks/useGetProducts';
import '@styles/ProductList.scss'

const API = 'https://api.escuelajs.co/api/v1/categories/1/products';

const ClothesList = () => {
    const clothes = useGetProducts(API);
    return(
        <section className='main-container'>
            <div className="ProductList">
			    {clothes.map(product => (
			    <ProductItem product={product} key={product.id} />
			    ))}	
            </div>
        </section>
    );
}

export default ClothesList;