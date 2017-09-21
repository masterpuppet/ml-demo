
const app = require('./app');

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.set('port', process.env.PORT || 3001);
  app.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')}`);
    console.log(`Worker ${cluster.worker.id} running!`);
  });
}
