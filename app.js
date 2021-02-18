const express = require('express')
const app = express()
const cors = require('cors')
const router = require ('./routers/index')
const port = 3000
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection',(socket) => {
    console.log('a user connected')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

http.listen(port, () => { 
    console.log(`running on http://localhost:${port}`)
})