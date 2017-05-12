
export const parseNum = (number) => {
	// console.log(number)
	number = number + ''
	var length = number.length
	var i = 0
	if (number[0] == '+' || number[0] == '-') {
		++i;
	}
	var result = 0
	while (i < number.length) {
		if (number[i] > '9' || number[i] < '0') {
			return 'NaN'
		}
		result = (result * 10 + (number[i] - '0'))
		++ i
	}
	if (number[0] == '-') result = -result
	return result
}