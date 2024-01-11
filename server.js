var express= require('express')
var app= express()
var http= require('http')
var path = require('path');
var commentsRouter = require('./controllers/commentController');
var chatsRouter= require('./controllers/chatController')
var { socketIO } = require('./services/chatService')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app routes
app.use('/forms', commentsRouter)
app.use('/chats', chatsRouter)

var server= http.createServer(app)
const io = socketIO(server);
server.listen(3000,()=> console.log("server started"))





