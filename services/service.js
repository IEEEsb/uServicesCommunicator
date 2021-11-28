const utils = require('../utils');

module.exports.registerService = async (options) => {
	await utils.sendRequest('service', 'POST', 'register', {}, options);
};

module.exports.getAllServices = async () => {
	const { data } = await utils.sendRequest('service', 'GET', 'all');
	return data?.services;
};
