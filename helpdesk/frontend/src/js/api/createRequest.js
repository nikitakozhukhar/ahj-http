const createRequest = async (options = {}) => {
	
	return fetch(options.url, {
		method: options.method,
		calback: options.calback,
	})
	.then(response => {
		if (response.ok) {
			return response.json()
		} else {
			const e = new Error('Что то пошло не так');
			throw e
		}
		// return response.json()
		// .then(err => {
		// 	const e = new Error('Что то пошло не так');
		// 	e.data = err;
		// 	throw e
		// })
	})

	//  const response = await fetch(localhost)
	// 	.then(JSON.stringify(response))
	// 	.then(data => JSON.stringify(data.body))
	// 	.then(body => console.log(body))
	// console.log(response.body)
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