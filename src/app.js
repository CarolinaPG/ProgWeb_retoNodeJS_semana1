const express = require('express');
const morgan = require('morgan'); //midleware
const mongoose = require('mongoose');
const vodyParser = require('body-parser');
const { json } = require('express');
const bodyParser = require('body-parser');

const app = express();

const usersRoutes = require('./routes/users')

// Conexión a base de datos
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.5zzwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(db => console.log('db conectada')
).catch(err => console.log(err));

// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());


// routes
//app.use(require('./routes/index'));
app.use('/users', usersRoutes);
app.use('/sendEmail', require('./routes/sendEmail'));
//const usersRoutes = require('./routes/users')

// static files

// error handler

app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});