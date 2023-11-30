import http from 'node:http'

const server = http.createServer((request, response) => {
    const { method, url } = request

    if(method === 'GET' && url === '/users') {
        return response.end('User list')
    }

    if(method === 'POST' && url === '/users') {
        return response.end('User creation')
    }

    return response.end('Hello Word!') 
})

server.listen(3333)

