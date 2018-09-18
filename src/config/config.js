const env = process.env.NODE_ENV || 'dev'; // 'dev' or 'test' for config type

const dev = {
	app: {
		port: parseInt(process.env.DEV_APP_PORT) || 3000,
	},
	db: {
		host: process.env.DEV_DB_HOST || 'localhost',
		port: parseInt(process.env.DEV_DB_PORT) || 27017,
		name: process.env.DEV_DB_NAME || 'dev',
	},
};

const test = {
	app: {
		port: parseInt(process.env.TEST_APP_PORT) || 3000,
	},
	db: {
		host: process.env.TEST_DB_HOST || 'localhost',
		port: parseInt(process.env.TEST_DB_PORT) || 27017,
		name: process.env.TEST_DB_NAME || 'test',
	},
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
};

const config = {
	dev,
	test,
	prod,
};

module.exports = config[env];