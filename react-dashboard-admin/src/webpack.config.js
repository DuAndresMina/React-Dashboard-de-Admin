const dotenv = require('dotenv-webpack');

module.exports = {
  // ... other Webpack configurations
  plugins: [
    new dotenv.config(),
  ],
};