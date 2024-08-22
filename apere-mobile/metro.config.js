// metro.config.js
const { getDefaultConfig } = require("@expo/metro-config");
const path = require('path');

// Get the default configuration
const defaultConfig = getDefaultConfig(__dirname);

// Add support for 'cjs' files
defaultConfig.resolver.sourceExts.push('cjs');

// Add custom modules for crypto and stream
defaultConfig.resolver.extraNodeModules = {
  crypto: require.resolve('crypto-browserify'),
  stream: require.resolve('stream-browserify'),
};

// Ensure Metro watches the node_modules directory
defaultConfig.watchFolders = [path.resolve(__dirname, 'node_modules')];

module.exports = defaultConfig;
