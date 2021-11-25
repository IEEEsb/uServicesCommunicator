const utils = require('../utils');

module.exports.registerService = async (options) => {
	await utils.sendRequest('service', 'POST', 'register', {}, options);
};
