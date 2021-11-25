const crypto = require('crypto');
const axios = require('axios');

const config = require('./config');

module.exports.hash = (text) => crypto.createHash('sha256').update(text, 'utf8').digest().toString('hex');

module.exports.randomBytes = (size) => crypto.randomBytes(Math.ceil(size / 2)).toString('hex');

module.exports.sendRequest = async (service, method, path, params, data, userId) => {
	const { secret, gatewayHost, serviceOptions } = config.get();
	const time = Date.now();
	const token = module.exports.hash(`${secret}${serviceOptions.path}${time}`);

	const headers = {
		Authorization: `Service ${token} ${serviceOptions.path} ${time}`,
	};
	if (userId) {
		headers.UserId = `${userId}`;
	}

	const options = {
		method,
		headers,
		data,
		params,
		url: `${gatewayHost}/api/${service}/${path}`,
	};
	return axios(options);
};
