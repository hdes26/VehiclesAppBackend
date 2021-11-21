const connectMongo = require('../helpers/connectMongo');




 const Person = {
    id:Number,
    nombres: String,
    apellidos: String,
    fecha_nacimiento: String,
    identificacion: String,
    profesion_oficio: String,
    casado: Boolean,
    ingresos_mensuales: Number
}; 



const HistoryPersons =  connectMongo('historialperson', Person );
        



module.exports =  HistoryPersons;




    

