import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import './src/database';
import  './src/routes/listarecetas.routes'
import router from './src/routes/listarecetas.routes';
import admin from './src/routes/admin.routes'

const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
    console.log('Estamos en el puerto ' + app.get('port'));
});

app.use(morgan('dev'));
app.use(cors('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use('/apireceta', router);
app.use('/usersadmin',admin)
