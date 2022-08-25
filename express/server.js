const express = require('express')
const server = express()

// IMPORT SECURITY
const helmet = require('helmet')
const cors = require('cors')

server.use(helmet())
server.use(cors())
server.use(express())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

const router = require('./app/routes/router')
server.use('/api', router)

const PORT = process.env.PORT || 3001
server.listen(PORT, ()=>{
    console.log(`Port ${PORT} is running...`)
})

