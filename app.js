const express = require('express')
const app = express()
const cors = require('cors')
const router = require ('./routers/index')
const port = 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(port, () => { 
    console.log(`running on http://localhost:${port}`)
})