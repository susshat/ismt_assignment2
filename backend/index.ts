import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

const app = express()
const httpServer = http.createServer(app);


mongoose.connect('mongodb://localhost:27017/myapp');

httpServer.listen(8000, () => {
console.log(`Server is running at: http//localhost:8000`);
});