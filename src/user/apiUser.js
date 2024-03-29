import {api} from '../api';

export const read = (userId, token) => {
    return fetch(`${api}/api/user/${userId}`, {
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

export const update = (userId, token, user) => {
    return fetch(`${api}/api/user/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)

    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error);
    });
}

export const getPurchaseHistory = (userId, token) => {
    return fetch(`${api}/api/orders/by/user/${userId}`, {
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

export const updateUser = (user, next) => {
    if(typeof window !== 'undefined'){
        if(localStorage.getItem('jwt')){
            let auth = JSON.parse(localStorage.getItem('jwt'));
            auth.user = user;
            localStorage.setItem('jwt', JSON.stringify(auth));
            next();
        }
    }
} 
