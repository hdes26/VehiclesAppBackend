const connectMongo = require('../helpers/connectMongo');




const Persons = {
    id: Number,
    nombres: String,
    apellidos: String,
    fecha_nacimiento: String,
    identificacion: String,
    profesion_oficio: String,
    casado: Boolean,
    ingresos_mensuales: Number,
};



const PersonsAppModel = connectMongo('personsapp', Persons);


module.exports = PersonsAppModel;
