import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";

const messages = [];

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true, // Allow cookies or authentication headers if needed
  },
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Websocket server is running");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  io.emit("messages", messages);

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    messages.push(msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(9016, () => {
  console.log("server running at http://localhost:9016");
});
