import React from 'react'
import Card from '../../components/Card/Card'

const ProductPage = () => {
    const productData = [
        {
            title: 'Product 1',
            price: '$9.99',
            description: 'Product 1 description goes here',
            imageUrl: 'https://example.com/product1-image.jpg'
        },
        {
            title: 'Product 2',
            price: '$19.99',
            description: 'Product 2 description goes here',
            imageUrl: 'https://example.com/product2-image.jpg'
        },
        {
            title: 'Product 3',
            price: '$29.99',
            description: 'Product 3 description goes here',
            imageUrl: 'https://example.com/product3-image.jpg'
        }
    ];

    return (
        <div>
            {productData.map((product, index) => (
                <Card key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductPage;