import express from "express";
import cors from 'cors';
//import swaggerUi from 'swagger-ui-express';

//import * as swaggerDocument from '../swagger.json';
//import * as errorHandler from './utils/errorHandler';
//import four0four = require('./utils/404')();

//import path from 'path';
var app = express();


//var logger = require('morgan');
/* var http = require('http');
let server = http.createServer(app);
 */
let port = process.env.PORT || 5000;
let environment = process.env.NODE_ENV;

//APP USE
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(compress());
//app.use(logger('dev'));
//app.use(errorHandler.init);

/* var options = {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }'
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
 */
var whitelist = [
  'http://localhost:4200'
];


var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors());
app.options('*', cors(corsOptions));

//routes
app.use('/' , require('./routes/index.ts'));

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});