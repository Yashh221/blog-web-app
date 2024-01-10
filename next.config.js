/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
};
// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");
// const withTM = require("next-transpile-modules")(["@/modules"]);

const webpack = require("webpack");

module.exports = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};

// const { parsed: localEnv } = require("dotenv").config();
// const webpack = require("webpack");

// module.exports = {
//   webpack(config) {
//     config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
//     return config;
//   },
// };

module.exports = nextConfig;
