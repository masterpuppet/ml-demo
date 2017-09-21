const cache = require('express-redis-cache')({
  host: process.env.REDIS_CACHE_URL || 'redis-14898.c11.us-east-1-3.ec2.cloud.redislabs.com',
  port: process.env.REDIS_CACHE_PORT || 14898,
  expire: process.env.REDIS_CACHE_EXPIRE || 5000
});
module.exports = cache;
