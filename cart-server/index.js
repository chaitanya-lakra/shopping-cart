import express from 'express';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';

const App  = express();


App.use(cors());
App.use(bodyParser.json({extended : true}));
App.use(bodyParser.urlencoded({extended : true}));
App.use('/',router);

const port = 8000;

Connection();

App.listen(port , ()=>console.log(`running on port ${port} hy`))