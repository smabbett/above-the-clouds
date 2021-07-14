export function parseDate(input) {
	var date = input.slice(0, 2);
	var month = input.slice(2, 5);
	let monthNums = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC',
	];
	let fixedMonth = monthNums.indexOf(month);
	var year = input.slice(5);
	console.log(new Date(year, fixedMonth, date));
	// new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
	return new Date(year, fixedMonth, date || 0); // Note: months are 0-based
}
