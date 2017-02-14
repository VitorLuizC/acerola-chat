const config = {
    port: process.env.PORT || 8080,
    host: '127.0.0.1',
    log() {
        console.log(`App was starting!\nListening at ${config.host}:${config.port}...`);
    }
};

module.exports = config;
