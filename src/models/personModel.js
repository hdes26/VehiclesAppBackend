let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    nombres: String,
    apellidos: String,
    fecha_nacimiento: String,
    identificacion: Number,
    profesion_oficio: String,
    casado: Boolean,
    ingresos_mensuales: Number,
    vehiculo: { type: Schema.Types.ObjectId, ref: 'Vehicles' },
});

module.exports = mongoose.model('Person', personSchema);
