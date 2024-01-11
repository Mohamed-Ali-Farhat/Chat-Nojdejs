var db= require('../database/database')
var socketIo = require('socket.io')

function socketIO(server) {
    const io = socketIo(server);
  
    io.on("connection", (socket) => {
      console.log("User connected with socket id: " + socket.id);
  
      socket.on("send-msg", async (data) => {
        console.log(data);
        const [pseudo, content] = data.split(": "); // Splitting the received data into pseudo and content
        io.emit("msg", data);
        const { Message } = await db();
        const likes = 0;
        await Message.create({ pseudo, content, likes });
      });
  
      // Emit "uTyping" event with the pseudonym when a user starts typing
      socket.on("uTyping", (pseudo) => {
        socket.broadcast.emit("msg-typing", pseudo);
      });
  
      // Emit "stopTyping" event when a user stops typing
      socket.on("stopTyping", () => {
        socket.broadcast.emit("msg-stop-typing");
      });
  
      socket.on("disconnect", () => {
        io.emit("msg", "User disconnected!!");
      });
  
      // Emit a message when a user connects
      io.emit("msg", "A user has connected!!");
    });
  
    return io;
  }
  
  
  
  async function showChats(req,res,next){

    res.render('chat',{ title: 'My chats'})
    }
async function findAllChats(req,res,next){
const { Message }= await db();
const Messages = await Message.findAll();
res.render('chats',{ title: 'My chats', Messages: Messages})
}

async function createChat(req,res,next){
    const { Message }= await db()
    const { pseudo,content }= req.body
    const likes=0;
      await Message.create({ pseudo,content,likes });
    res.redirect('/chats')
}
module.exports= { socketIO, showChats, findAllChats, createChat }