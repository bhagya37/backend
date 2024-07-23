const express = require("express");
const app = express();
const port = 8080;
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection" , (socket)=>{
    console.log("user connected")
    socket.on("message" , (msg)=>{
    console.log(msg);
    io.emit("message" , msg)
    })

    socket.on("deleteMessage" , (msgId) => {
        io.emit("deleteMessage" , msgId)
        })
})



app.get("/" , (req, res) => {
    res.sendFile(  __dirname + "/public/index.html");
});

http.listen(port, () => {
    console.log(`Server started running at port ${port}`);
});
