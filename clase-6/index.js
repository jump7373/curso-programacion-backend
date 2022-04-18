const http = require("http")
const moment = require("moment")

const server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url === "/"){
        res.end("Hola este el patch principal")
    }
    if(req.url === "/productos"){
        let start = moment().format("HH:mm:ss")
        res.end("Son las: " + start)

    }
})

server.listen(8080, ()=> {
    console.log("Escuchando el servidor")
})

//localhost:8080