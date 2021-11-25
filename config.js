let config = {};

module.exports.set = (conf) => {
	config = conf;
};

module.exports.get = () => config;
