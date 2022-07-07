const express =require('express') ;
const http =require('http') ;
const expressSession =require( 'express-session');
const mongoose =require('mongoose') ;
const dotenv =require('dotenv') ;
const APIRouter =require( './routes');



const bootstrap = async () => {
  console.log('aa')
  const app = express()

  dotenv.config();

  const mongoString = process.env.DATABASE_URL
  const httpServer = http.createServer(app);
  // const sess = {
  //   secret: process.env.SESSION_SECRET ?? 'test',
  //   resave: true,
  //   saveUninitialized: true,
  //   cookie: {},
  // };
  // if (process.env.isHTTPS === 'true') {
  //   app.set('trust proxy', 1);
  //   sess.cookie.secure = true;
  // }

  // app.use(expressSession(sess));
  app.use(express.json());
  app.use('/api',APIRouter);

  await mongoose.connect(mongoString);
  const database = mongoose.connection;

  database.on('error',  (error) =>{
    console.log(error)
  });

  database.once('error', (error) => {
    console.log('Database connected')

  });

  httpServer.listen(8000, () => {
    console.log(`Server is running at: http//localhost:8000`);
  
});}

bootstrap();