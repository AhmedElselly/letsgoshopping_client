import {api} from '../api';
export const createCategory = (userId, token, category) => {
    return fetch(`${api}/api/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    });
}

export const createProduct = (userId, token, product) => {
    return fetch(`${api}/api/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    });
}

export const getCategories = () => {
    return fetch(`${api}/api/categories`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const listOrders = (userId, token) => {
    return fetch(`${api}/api/order/list/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const getStatusValues = (userId, token) => {
    return fetch(`${api}/api/order/status-values/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${api}/api/order/${orderId}/status/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({status, orderId})
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

/**
 * to perform crud operations on products
 * get all products
 * get a single product
 * update single product
 * delete single product
 */

export const getProducts = () => {
    return fetch(`${api}/api/products?limit=undefined`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${api}/api/product/${productId}/${userId}`, {
        method: 'DELETE',
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

export const getProduct = (productId) => {
    return fetch(`${api}/api/product/${productId}`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}

export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${api}/api/product/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    })
}