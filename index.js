const services = require('./services');
const config = require('./config');

module.exports.init = async (gatewaySecret, gatewayHost, serviceOptions) => {
	config.set({
		gatewaySecret,
		gatewayHost,
		serviceOptions,
	});
	await services.Service.registerService(serviceOptions);
	setInterval(async () => {
		await services.Service.registerService(serviceOptions);
	}, 60 * 1000);
};

module.exports.services = services;
