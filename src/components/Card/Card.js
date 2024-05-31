import React from 'react';

const Card = ({ product }) => {
    return (
        <div className="card">
            <img className='card__image' src={product.image} alt={product.title} />
            <h3 className='card__title'>{product.title}</h3>
            <p className='card__price'>{product.price}</p>
            <p className='card__description'>{product.description}</p>
            <button className='card__button'>Add to Cart</button>
        </div>
    );
};

export default Card;