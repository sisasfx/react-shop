import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const { addtoCart } = useContext(AppContext)

	const handleClick = item => {
		addtoCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;