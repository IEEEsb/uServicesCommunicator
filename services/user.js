const utils = require('../utils');

module.exports.checkCredentials = async (email, password) => {
	const { data } = await utils.sendRequest('user', 'POST', 'checkCredentials', {}, { email, password });
	return { userId: data.userId };
};
