let mongoose = require('mongoose');

const Schema = mongoose.Schema;


const historySchema = new Schema({
    idPerson: { type: Schema.Types.ObjectId, ref: 'Person' },
    idVehicle: { type: Schema.Types.ObjectId, ref: 'Vehicles' },
    accion: String,
    date: String

});

module.exports = mongoose.model('History', historySchema);
