export default ( str, reverse ) => {

	return reverse ?

		str.replace(/^[a-z]|-[a-z]/g, (word) => {
			return word.substr(word == str.substr(0, 1) ? 0 : 1, word.length).toUpperCase();
		}):

		str.replace(/[A-Z]/g, (word) => {
			return [word == str.substr(0, 1) ? '' : '-', word.toLowerCase()].join('');
		});
}
