const utils = require('../utils');

module.exports.checkCredentials = async (email, password) => {
	await utils.sendRequest('user', 'POST', 'checkCredentials', {}, { email, password });
};
