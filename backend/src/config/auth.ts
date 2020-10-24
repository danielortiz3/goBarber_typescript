export default {
  jwt: {
    // secret: 'a62ab397e71b4b3911fbcde8b70864e6',
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  },
};
