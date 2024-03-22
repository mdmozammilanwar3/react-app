/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProductsAxios } from '../../axios/axios';
import Swal from 'sweetalert2'

const Products = () => {
    const staticImage = 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600';
    const [products, setProducts] = useState([]);

    const token = localStorage.getItem('token');

    // CALL API TO GET PRODUCTS
    const getProducts = () => {
        getProductsAxios('products', token, successHandler);
    };

    const successHandler = (data) => {
        setProducts(data);
    };

    const deleteSuccessHandler = (id) => {
        Swal.fire({
            title: "Deleted!",
            text: "Product has been deleted.",
            icon: "success"
          });
        const newProducts = products.filter((product) => product._id !== id);
        setProducts(() => newProducts);
    };

    const AddProductHandler = () => {
        setProducts((prev) => [...prev, { image: staticImage, title: '', description: '', price: '', isNewProduct: true, _id: new Date().getTime() }]);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='container py-5'>
            <h1 className='text-center mb-5'>Products List</h1>
            <div className='d-flex justify-content-end mb-4'>
                <button
                    className='btn btn-success px-5'
                    onClick={AddProductHandler}
                    type='button'
                >
                    Add Product
                </button>
            </div>
            <div className='row'>
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        productData={product}
                        getProducts={getProducts}
                        onDeleteProduct={deleteSuccessHandler}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
