import http from 'node:http'

const server = http.createServer((request, response) => {
    return response.end('Hello Wordd!')
})

server.listen(3333)

