const re = 
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
1
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (email) => {
	const invalidEmails = contact
		.filter(email => !re.test(contact));

		if (invalidEmails.length) {
			return `These emails are invalid: ${invalidEmails}`;
		}

		return;
};