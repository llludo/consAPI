const CodeHttp = document.getElementById('code');
console.log(fetch('https://reqres.in/api/users'));

//Get
fetch('https://reqres.in/api/users')
	.then((res) =>CodeHttp.innerHTML = res.status )

	.catch(function (err) {
		// Une erreur est survenue
	});

//post
function Post() {
	const user = {
		first_name: 'John',
		last_name: 'Lilly',
		job_title: 'Software Engineer',
	};

	const options = {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	fetch('https://reqres.in/api/users', options)
		.then((res) => {
			if (res.ok) {
				return (CodeHttp.innerHTML = res.status);
			} else {
				return Promise.reject('Une erreur est survenue');
			}
		})
		.then((res) => console.log(res));
}

//put
function Put() {
	const user = {
		first_name: 'John',
		last_name: 'Lilly',
		job_title: 'Software Engineer',
	};

	const options = {
		method: 'PUT',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	fetch('https://reqres.in/api/users/2', options)
		.then((res) => {
			if (res.ok) {
				return (CodeHttp.innerHTML = res.status);
			} else {
				return Promise.reject('Une erreur est survenue');
			}
		})
		.then((res) => console.log(res));
}

//delete
function Delete() {
	const options = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	};

	fetch('https://reqres.in/api/users/2', options)
		.then((res) => {
			if (res.ok) {
				return (CodeHttp.innerHTML = res.status);
			} else {
				return Promise.reject('Une erreur est survenue');
			}
		})
		.then((res) => console.log(res));
}


