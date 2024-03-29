import queryString from 'query-string';
import {api} from '../api';

export const getProducts = (sortBy) => {
    return fetch(`${api}/api/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    }
    return fetch(`${api}/api/products/by/search`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    });
}

export const list = (params) => {
    const query = queryString.stringify(params);
    console.log(`Query: ${query}`);
    return fetch(`${api}/api/products/search?${query}`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const read = (productId) => {
    return fetch(`${api}/api/product/${productId}`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}


export const listRelated = (productId) => {
    return fetch(`${api}/api/products/related/${productId}`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const getBraintreeClientToken = (userId, token) => {
    return fetch(`${api}/api/braintree/getToken/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const processPayment = (userId, token, paymentData) => {
    return fetch(`${api}/api/braintree/payment/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const createOrder = (userId, token, createOrderData) => {
    return fetch(`${api}/api/order/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: createOrderData})

    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    });
}

