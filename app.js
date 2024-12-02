const express = require('express')
const http = require('http')
const mongo = require('mongoose')
const db = require('./config/dbconnection.json')
const path= require('path')
const {addChat}  = require('./controller/userController')

//const bodyparser = require('body-parser')
mongo.connect(db.url)
.then(()=>{
    console.log('database connect')
})
.catch((err)=>{
    console.log(err)
})

const userRouter = require('./routes/users')
const productRouter = require('./routes/products')

const { error } = require('console')

const app = express()
app.set("views",path.join(__dirname,"views"))
app.set("view engine",("twig")) 
app.use(express.json())
app.use('/users',userRouter)
app.use('/products',productRouter)
//app.use(bodyparser.json())

const server = http.createServer(app,console.log('server run'))
const io = require('socket.io')(server)

io.on("connection",(socket)=>{ //sna3na l flux 
    console.log("user connected")
    socket.emit("msg","user connected")

   

    socket.on("msgname",(data)=>{
        addChat(data)
    io.emit("msgname",data)
    })

    socket.on("typing",(data)=>{
    socket.broadcast.emit("typing",data)
        })
//io yeb3eth l nes lkol , socket nesta3mlouh wa9t ena manchoufch 7aja w nes tchouf 
    socket.on('disconnect',()=>{
        io.emit("msg","user disconnected")

    })

})
server.listen(3000)