const express = require('express');
const errorHandler = require('./middleware/ErrorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();
const http = require('http');
const socketio = require("socket.io");
const cors = require('cors');

connectDb();

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
  }
});

// Middleware to make io available in all routes
app.use((req, res, next) => {
  req.io = io;
  next();
});

const port = process.env.PORT || 5000;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());
app.use("/api/reviews", require('./routes/reviewRoutes')); // I'm assuming you have your routes set up like this

app.use(errorHandler);

server.listen(port, () => {
    console.log("server running on port " + port);
});