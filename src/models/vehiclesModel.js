let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehiclesSchema = new Schema({
    placa: String,
    marca: String,
    modelo: String,
    puertas: Number,
    tipo: String,
    disponible: Boolean
});

module.exports = mongoose.model('Vehicles', vehiclesSchema);
