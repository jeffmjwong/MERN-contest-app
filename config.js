const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = message => {
  console.info('****************');
  console.info(message);
  console.info('****************');
};

export default {
  mongodbUri: 'mongodb://localhost:27017/test',
  database: 'test',
  port: env.PORT || 4321,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
