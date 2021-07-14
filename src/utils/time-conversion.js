export function daysHoursMinutesConvert(minutes) {
	return (
		parseInt(minutes / 24 / 60) +
		' days, ' +
		parseInt((minutes / 60) % 24) +
		' hours, ' +
		parseInt(minutes % 60) +
		' minutes'
	);
}

export function hoursMinutesConvert(minutes) {
	const flightHours = Math.floor(minutes / 60);
	const flightMinutes = Math.round(minutes % 60);
	let hours = '';
	let setMinutes = '';
	if (flightHours < 10) {
		hours = `0${flightHours}`;
	} else {
		hours = `${flightHours}`;
	}
	if (flightMinutes < 10) {
		setMinutes = `0${flightMinutes}`;
	} else {
		setMinutes = `${flightMinutes}`;
	}
	return `${hours}:${setMinutes}`;
}
