const getJokeButton = document.getElementById('get-jokes');
const jokeParagraph = document.getElementById('joke-space');
const spinner = document.getElementById('spinner');

const getJoke = async () => {
	spinner.style.display = 'block';
	jokeParagraph.innerText = 'Loading...';
	getJokeButton.disabled = true;

	try {
		const response = await fetch('https://api.chucknorris.io/jokes/random');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		jokeParagraph.innerText = data.value;
	} catch (error) {
		console.error('Error fetching joke:', error);
		jokeParagraph.innerText =
			'Oops! Failed to fetch a joke. Please try again later.';
	} finally {
		spinner.style.display = 'none';
		getJokeButton.disabled = false;
	}
};

getJokeButton.addEventListener('click', getJoke);
