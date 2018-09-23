const env = process.env.NODE_ENV || 'dev'; // 'dev' or 'test' for config type

const dev = {
	app: {
		port: parseInt(process.env.DEV_APP_PORT) || 1337,
	},
	db: {
		host: process.env.DEV_DB_HOST || 'localhost',
		port: parseInt(process.env.DEV_DB_PORT) || 27017,
		name: process.env.DEV_DB_NAME || 'dev',
	},
	serverIp: process.env.DEV_SERVER_IP,
};

const test = {
	app: {
		port: parseInt(process.env.TEST_APP_PORT) || 1337,
	},
	db: {
		host: process.env.TEST_DB_HOST || 'mongo',
		port: parseInt(process.env.TEST_DB_PORT) || 27017,
		name: process.env.TEST_DB_NAME || 'test',
	},
	serverIp: process.env.TEST_SERVER_IP,
};

const prod = {
	app: {
		port: parseInt(process.env.TEST_APP_PORT) || 1337,
	},
	db: {
		host: process.env.TEST_DB_HOST || 'mongodb',
		port: parseInt(process.env.TEST_DB_PORT) || 27017,
		name: process.env.TEST_DB_NAME || 'fMDB',
	},
	serverIp: process.env.PROD_SERVER_IP,
};

const config = {
	dev,
	test,
	prod,
};

module.exports = config[env];