const http = require('http')

const server = http.createServer((req, res) => {
    console.log(`hi`)

    res.end(`Output message`)
})

server.listen(5000, () => {
    console.log(`Server listening on port : 5000`)
})