const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let words = '';
	for (let i = 0; i < expr.length; i += 10) {
		let numbers = expr.substr(i, 10);
		if (numbers === '**********') {
			words += ' ';
		} else {
			let elements = '';
			for (let j = 0; j < expr.length; j += 2) {
				let character = numbers.substr(j, 2);
				if (character === '10') {
					elements += '.';
				} else if (character === '11') {
					elements += '-';
				}
			}
			words += MORSE_TABLE[elements];
		}
	}
	return words;
}

module.exports = {
	decode
};