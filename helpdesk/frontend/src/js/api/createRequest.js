const createRequest = async (options = {}) => {
	const resp = await fetch('http://localhost:8080/', {
		method: 'GET',
		data: JSON.stringify(options)
	})
	.then(response)
	console.log(response)
};

export default createRequest;

console.log(createRequest({
	name: 'Isaak'
}))