/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    // Dummy data for test (get rid of it once you call the api)
    const productsList = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Product',
            description: 'Description of Product',
            price: 29.99,
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Product',
            description: 'Description of Product',
            price: 29.99,
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Product',
            description: 'Description of Product',
            price: 29.99,
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Product',
            description: 'Description of Product',
            price: 29.99,
        },
        {
            id: 5,
            image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Product',
            description: 'Description of Product',
            price: 29.99,
        },
        {
            id: 6,
            image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Product',
            description: 'Description of Product',
            price: 29.99,
        },
        {
            id: 7,
            image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Product',
            description: 'Description of Product',
            price: 29.99,
        },
    ];

    // CALL API TO GET PRODUCTS
    const getProducts = () => {
        // Replace productsList with products returned from API
        setProducts(productsList);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='container py-5'>
            <h1 className='text-center mb-5'>Products List</h1>
            <div className='row'>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
