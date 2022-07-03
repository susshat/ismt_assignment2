import express from 'express';
import http from 'http';

const app = express()
const httpServer = http.createServer(app);

httpServer.listen(8000, () => {
console.log(`Server is running at: http//localhost:8000`);
});