/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { editProductsAxios, deleteProductsAxios, createProductsAxios } from '../../axios/axios';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
const ProductCard = ({ productData, getProducts, onDeleteProduct }) => {
    const token = localStorage.getItem('token');
    const [editMode, setEditMode] = useState(false);
    const [productUpdatedData, setProductUpdatedData] = useState({
        title: productData.title,
        description: productData.description,
        price: productData.price,
    });

    const inputHandler = (e, name) => {
        setProductUpdatedData((prev) => {
            return { ...prev, [name]: e.target.value };
        });
    };

    const createProduct = () => {
        createProductsAxios('product', token, productUpdatedData, createSuccessHandler);
    }

    const createSuccessHandler = () => {
        toast.success('Product created successfully!', {
            autoClose: 3000, // Close after 3 seconds
        });
        setEditMode(false);
        getProducts();
    }

    const editProduct = () => {
        if (editMode) {
            editProductsAxios(`product/${productData._id}`, token, productUpdatedData, editSuccessHandler);
        } else {
            setEditMode(true);
        }
    };

    const editSuccessHandler = () => {
        toast.success('Product updated successfully!', {
            autoClose: 3000, // Close after 3 seconds
        });
        setEditMode(false);
    };
    const swal = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              deleteProduct();
            }
          });
    }
    const deleteProduct = () => {

        deleteProductsAxios(`product/${productData._id}`, token, onDeleteProduct);
    };

    useEffect(() => {
        if (productData.isNewProduct) {
            setEditMode(true);
        }
    }, []);

    return (
        <div className='col-lg-4 col-md-6 mb-4'>
            <div className='card h-100'>
                <img
                    src={productData.image}
                    className='card-img-top object-fit-cover'
                    style={{ maxHeight: '300px' }}
                    alt={productUpdatedData.title}
                />
                <div className='card-body'>
                    <input
                        className={`card-title bg-transparent py-2 fw-bold ${
                            editMode ? 'border-1 form-control fs-6 px-2 mb-2' : 'border-0 fs-5 px-0'
                        }`}
                        type='text'
                        value={productUpdatedData.title}
                        disabled={!editMode}
                        placeholder='Product title'
                        onChange={(e) => inputHandler(e, 'title')}
                    />

                    <input
                        className={`card-text bg-transparent py-2 ${
                            editMode ? 'border-1 form-control px-2 mb-2' : 'border-0 px-0'
                        }`}
                        type='text'
                        value={productUpdatedData.description}
                        disabled={!editMode}
                        placeholder='Product description'
                        onChange={(e) => inputHandler(e, 'description')}
                    />

                    <div className='d-flex justify-content-between align-items-center gap-2 mt-3'>
                        <input
                            type='text'
                            style={{ maxWidth: '45%' }}
                            className={`card-subtitle w-auto bg-transparent py-2 ${
                                editMode ? 'border-1 form-control px-2' : 'border-0 px-0 text-muted'
                            }`}
                            value={
                                editMode ? productUpdatedData.price : '$' + productUpdatedData.price
                            }
                            disabled={!editMode}
                            placeholder='Product price'
                            onChange={(e) => inputHandler(e, 'price')}
                        />

                        {productData.isNewProduct ? (
                            <button
                                className='btn btn-success'
                                type='button'
                                onClick={createProduct}
                            >
                                Add
                            </button>
                        ) : (
                            <div className='d-flex gap-2'>
                                <button
                                    className='btn btn-success'
                                    type='button'
                                    onClick={editProduct}
                                >
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger'
                                    type='button'
                                    onClick={swal}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
