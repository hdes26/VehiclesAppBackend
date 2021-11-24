const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const persons = require('./src/routes/persons');
const vehicles = require('./src/routes/vehicles');
const history = require('./src/routes/history');
const mongoose = require('mongoose');


//settings
app.set('port', process.env.PORT || 2000);
app.set('json spaces', 2);
const url = `mongodb+srv://admin:rvIy6Ix6DFzmGpbA@cluster0.5zo5k.mongodb.net/Prueba?retryWrites=true&w=majority`;

mongoose.createConnection
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => { console.log("db is conected") })
    .catch(error => { console.log('error ' + error) });
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/person', persons);
app.use('/api/vehicles', vehicles);
app.use('/api/history', history);



//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});

