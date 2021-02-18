const express = require('express')
const app = express()
const cors = require('cors')
const router = require ('./routers/index')
const port = 3000
const http = require('http').Server(app)
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
        credentials: true
    },
    allowEIO3: true
})

io.on('connection',(socket) => {
    console.log('a user connected')
    socket.on("newMessage", (data) => {
        socket.broadcast.emit('serverMessage', data)
    })
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

http.listen(port, () => { 
    console.log(`running on http://localhost:${port}`)
})