const connectMongo = require('../helpers/connectMongo');





const Vehicles = {
    id: Number,
    placa: String,
    marca: String,
    modelo: String,
    puertas: Number,
    tipo: String,
    disponible: Boolean
};


const HistoryVehicles = connectMongo('historialvehicle', Vehicles);






module.exports = HistoryVehicles;






