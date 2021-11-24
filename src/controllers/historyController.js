const HistorialModel = require("../models/historyModel");
const VehiclesModel = require("../models/vehiclesModel");
const PersonsModel = require("../models/personModel");

exports.getHistory = async (req, res) => {
    const id = req.params.idVehicle;
    try {
        const historial = await HistorialModel.find({ idVehicle: id });
        const historialPerson = await PersonsModel.populate(historial, { path: 'idPerson' });

        res.status(200).json({
            historial: historialPerson
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }

}
