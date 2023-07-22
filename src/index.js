module.exports = function toReadable(number) {
	const singleAndTwoDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
	const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	const hundreds = ["hundred"]
	let result = ''

	if (number < 20) {
		return singleAndTwoDigits[number]
	}

	if (number > 19 && number < 100) {
		number = number.toString().split('')

		if (number[1] === '0') {
			return tens[number[0]]
		}

		result = tens[number[0]] + ' ' + singleAndTwoDigits[number[1]]
	}

	if (number > 99 && number < 1000) {
		number = number.toString().split('')

		if (number[1] === '0' && number[2] === '0') {
			return singleAndTwoDigits[number[0]] + ' ' + hundreds[0]
		}
		if (number[1] === '0' && number[2] !== '0') {
			return singleAndTwoDigits[number[0]] + ' ' + hundreds[0] + ' ' + singleAndTwoDigits[number[2]]
		}
		if (number[1] !== '0' && number[2] === '0') {
			return singleAndTwoDigits[number[0]] + ' ' + hundreds[0] + ' ' + tens[number[1]]
		}
		if (number[1] === '1' && number[2] !== '0') {
			let sum = number[1] + number[2]
			return singleAndTwoDigits[number[0]] + ' ' + hundreds[0] + ' ' + singleAndTwoDigits[+sum]
		}
		if (number[1] !== '0' && number[2] !== '0') {
			return singleAndTwoDigits[number[0]] + ' ' + hundreds[0] + ' ' + tens[number[1]] + ' ' + singleAndTwoDigits[number[2]]
		}
	}

	return result
}
