const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { Mongoose } = require('./database');



const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use('/api/employees',require('./routes/employee.routes'));


//starting the server
app.listen(app.get('port'), ()=>{
    console.log('server on port ' + app.get('port') ); 
    
}); 