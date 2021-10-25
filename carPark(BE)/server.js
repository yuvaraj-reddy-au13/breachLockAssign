const http = require('http')

const app = require('./app')

const PORT = 3300

const server = http.createServer(app)

server.listen(PORT)

console.log(`server running in : ${PORT}`)