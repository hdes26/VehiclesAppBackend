const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const persons = require('./src/routes/persons');
const vehicles = require('./src/routes/vehicles');


//settings
app.set('port', process.env.PORT || 2000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/person', persons);
app.use('/api/vehicles', vehicles);



//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});

