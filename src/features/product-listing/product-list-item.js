import React from 'react';


export default function ProductListItem(props) {
    const thisItemsInCart = props.cart.filter(item => item.id === props.product.id);
    return <div className='product-list-item'>
    <h3>{props.name}</h3>
    <img height={120}
    title={props.product.name}
    src={`/products/${props.product.image}`}
    alt='img'
    />
    <div> {props.product.description}</div>
    <div>${props.product.price}</div>
    <div>
    <button
    onClick={() => props.addToCart(props.product)}> Add to cart </button>
    </div>
    </div>
}