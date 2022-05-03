const getJoke = document.querySelector('.getJoke');
const joke = document.querySelector('.joke');
const jokeEmoji = document.querySelector('.jokeEmoji');

const fetchJokes = async () => {
	try {
		const config = { headers: { Accept: 'application/json' } };
		const res = await axios.get('https://icanhazdadjoke.com/', config);
		return res.data.joke;
	} catch (err) {
		const error = "Couldn't find another joke, please try again!";
		return error;
	}
};

const addJoke = async () => {
	try {
		const jokeText = await fetchJokes();
		joke.innerText = jokeText;
	} catch (err) {
		joke.innerText = error;
	}
};

getJoke.addEventListener('click', addJoke);
