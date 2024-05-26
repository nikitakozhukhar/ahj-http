const createRequest = async (options = {}) => {
	const headers = {
		'Content-Type': 'application/json',
	}
	return fetch(options.url, {
		method: options.method,
		body: options.method === 'GET' ? null : JSON.stringify(options.data),
		
	})
	.then(response => response.json())
	.then(result => options.callback(result))
	.catch(e => {
		console.error('Что то пошло не по плану', e)
	})
};

export default createRequest;

// function sendRequest(method, url, body = null, callback) {
// 	const headers = {
// 		'Content-Type': 'application/json',
// 	}
// 	return fetch(url, {
// 		method: method,
// 		// body: JSON.stringify(body),
// 		headers: headers,
// 		callback: callback,
// 	})
// 	.then(response => {
// 		if (response.ok) {
// 			return response.json()
// 		}
// 		return response.json()
// 		.then(err => {
// 			const e = new Error('Что то пошло не так');
// 			e.data = err;
// 			throw e
// 		})
// 	})

// }

// sendRequest('GET', requestURL, cons)
// .then((data) => {
// 	data.map(item => {
// 		cons(item.name)
// 		console.log(item)
// 	})
// })
// .catch(err => console.log(err))