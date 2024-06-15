export default function (dueDate) {
	const dueDatePattern = '(0[1-9]|1[1,2])\\/(0[1-9]|[12][0-9]|3[01])';

	const date = new RegExp(dueDatePattern);

	if (date.test(dueDate)) {
		return true;
	} else {
		return false;
	}
};