import {api} from '../api';

export const signup = (user) => {
		// console.log(name, email, password);
		return fetch(`${api}/api/register`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then(response => {
			return response.json();
		})
		.catch(err => {
			console.log(err);
		});
	}

export const signin = (user) => {
	// console.log(name, email, password);
	return fetch(`${api}/api/login`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	}).then(response => {
		return response.json();
	})
	.catch(err => {
		console.log(err);
	});
}

export const authenticate = (data, next) => {
	if(typeof window !== 'undefined'){
		localStorage.setItem('jwt', JSON.stringify(data));
		next();
	}
}

export const logout = (next) => {
	if(typeof window !== 'undefined'){
		localStorage.removeItem('jwt');
		next();
		return fetch('${api}/api/logout', {
			method: 'GET'
		}).then(res => {
			console.log('Logout', res);
		}).catch(err => {
			console.log(err);
		});
	}
}

export const isAuthenticated = () => {
	if(typeof window == 'undefined'){
		return false;
	}
	if(localStorage.getItem('jwt')){
		return JSON.parse(localStorage.getItem('jwt'));
	} else {
		return false;
	}
}