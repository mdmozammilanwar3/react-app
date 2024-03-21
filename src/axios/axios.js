/* eslint-disable no-unused-vars */
import axios from 'axios';

const BASE_URL_USER = 'http://localhost:4000/user/';
const BASE_URL_PRODUCT = 'http://localhost:4000/api/';

export const userAxios = (endPoint, data, successHandler) => {
    axios
        .post(`${BASE_URL_USER}${endPoint}`, data)
        .then(function (response) {
            if (successHandler) {
                successHandler(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const getProductsAxios = (endPoint, token, successHandler) => {
    axios
        .get(`${BASE_URL_PRODUCT}${endPoint}`, {headers: {Authorization: `Bearer ${token}`}})
        .then(function (response) {
            if (successHandler) {
                successHandler(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const createProductsAxios = (endPoint, token, data, successHandler) => {
    axios
        .post(`${BASE_URL_PRODUCT}${endPoint}`, data, {headers: {Authorization: `Bearer ${token}`}})
        .then(function (response) {
            if (successHandler) {
                successHandler(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const editProductsAxios = (endPoint, token, data, successHandler) => {
    axios
        .put(`${BASE_URL_PRODUCT}${endPoint}`, data, {headers: {Authorization: `Bearer ${token}`}})
        .then(function (response) {
            if (successHandler) {
                successHandler(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const deleteProductsAxios = (endPoint, token, successHandler) => {
    axios
        .delete(`${BASE_URL_PRODUCT}${endPoint}`, {headers: {Authorization: `Bearer ${token}`}})
        .then(function (response) {
            if (successHandler) {
                successHandler(endPoint.slice(8));
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};
