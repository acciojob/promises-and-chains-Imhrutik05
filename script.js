document.getElementById('userForm').addEventListener('submit', function(e) {
	e.preventDefault();

	const age = document.querySelector('#age').value.trim();
	const name = document.querySelector('#name').value.trim();

	if (!name || !age){
		alert("Please enter valid details.");
		return;
	}

	// creating promise
	const checkAge = new Promise ((resolve, reject) => {
		setTimeout(() => {
			if(parseInt(age) > 18){
				resolve(`Welcome, ${name}. You can vote.`);
			} else {
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		}, 4000);
	});

	// handling that promise
	checkAge
		.then(message => alert(message))
		.catch(error => alert(error));

});