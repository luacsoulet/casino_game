import http from 'http';
import app from './app';

const normalizePort = (val: string) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

const errorHandler = (error: any) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
        default:
            throw error;
    }
}

const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', onListening);

function onListening() {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind + ' ✅');
    console.log('Swagger UI available at: http://localhost:' + port + '/api-docs');
}

server.listen(port);