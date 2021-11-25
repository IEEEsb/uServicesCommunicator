const services = require('./services');
const config = require('./config');

module.exports.init = async (secret, gatewayHost, serviceOptions) => {
	config.set({
		secret,
		gatewayHost,
		serviceOptions,
	});
	await services.Service.registerService(serviceOptions);
	setInterval(async () => {
		await services.Service.registerService(serviceOptions);
	}, 60 * 1000);
};

module.exports.services = services;
