import http from "node:http"

// Metodos HTTP:
//    GET - POST - PUT - PATH - DELETE

const server = http.createServer((require, response) => {
    const { method, url } = require

    if (method === "GET" && url === "/users") {
        return response.end("Listagem de usuarios")
    }

    if (method === "POST" && url === "/users") {
        return response.end("Criação de usuarios")
    }

    return response.end("Hello World")
})

server.listen(3333)