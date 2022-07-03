import express from 'express';
import http from 'http';
import expressSession from 'express-session';
import mongoose from 'mongoose';

const app = express()

const httpServer = http.createServer(app);
const sess: expressSession.SessionOptions = {
    secret: process.env.SESSION_SECRET ?? '',
    resave: true,
    saveUninitialized: true,
    cookie: {},
  };
  if (process.env.isHTTPS === 'true') {
    app.set('trust proxy', 1);
    sess.cookie!.secure = true;
  }

app.use(expressSession(sess));

mongoose.connect('mongodb://localhost:27017/myapp');

httpServer.listen(8000, () => {
console.log(`Server is running at: http//localhost:8000`);
});