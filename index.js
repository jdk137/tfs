module.exports = process.env.NODE_TFS_COV ? require('./lib-cov/client') : require('./lib/client');