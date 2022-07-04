import express from 'express';
import http from 'http';
import expressSession from 'express-session';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import APIRouter from './routes';



const bootstrap = async () => {
  const app = express()

  dotenv.config();

  const mongoString: any = process.env.DATABASE_URL
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
  app.use(express.json());

  await mongoose.connect(mongoString);
  const database = mongoose.connection;

  database.on('error',  (error) =>{
    console.log(error)
  });

  database.once('error', (error) => {
    console.log('Database connected')

    app.use(APIRouter);
  });

  httpServer.listen(8000, () => {
    console.log(`Server is running at: http//localhost:8000`);
  
});}

bootstrap();