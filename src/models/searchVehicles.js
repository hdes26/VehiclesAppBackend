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

const VehiclesAppModel = connectMongo('vehiclesapp', Vehicles);

module.exports = VehiclesAppModel;