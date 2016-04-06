const getBabelRelayPlugin = require('babel-relay-plugin');
const schema = require('./metaphysics/data/schema.json');

module.exports = getBabelRelayPlugin(schema.data);
