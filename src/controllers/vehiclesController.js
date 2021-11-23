
const VehiclesAppModel = require("../models/searchVehicles");


//Devuelve todas las personas
exports.allVehicles = async (req, res) => {
    try {
        const VehiclesApp = await VehiclesAppModel.find();
        console.log(VehiclesApp);
        res.status(200).json({
            VehiclesApp
        });

    } catch (error) {
        res.status(400).json(error)
    }
}

//Crea una nueva persona
exports.createVehicle = async (req, res) => {

    try {
        const inf = req.body;
        const vehicle = new VehiclesAppModel({
            id: inf.id,
            placa: inf.placa,
            marca: inf.marca,
            modelo: inf.modelo,
            puertas: inf.puertas,
            tipo: inf.tipo,
            disponible: inf.disponible

        })

        const resultado = await vehicle.save()

        console.log(resultado);

        res.status(200).json('Vehiculo creado');

    } catch (error) {
        res.status(400).json(error);
    }

}
//Actualiza la informacion de una vehiculo ya creada
exports.upgradoVehicle = async (req, res) => {

    try {

        let { id } = req.params
        const inf = req.body;
        const vehicle = await VehiclesAppModel.updateOne({ _id: id },
            {
                $set: {
                    placa: inf.placa,
                    marca: inf.marca,
                    modelo: inf.modelo,
                    puertas: inf.puertas,
                    tipo: inf.tipo,
                    disponible: inf.disponible

                }
            })
        res.status(200).json('Vehiculo actualizado');
    } catch (error) {
        res.status(400).json(error);
    }

}
//Elimina una persona
exports.deleteVehicle = async (req, res) => {

    try {
        let { id } = req.params;
        const vehicle = await VehiclesAppModel.deleteOne({ _id: id });
        console.log(vehicle);
        res.status(200).json('Usuario eliminado');

    } catch (error) {
        res.status(400).json(error);

    }

}

//Historial vehiculos disponibles
exports.availableVehicle = async (req, res) => {
    try {

        const avaiblevehicle = await VehiclesAppModel.find({ disponible: true })



        res.status(200).json(avaiblevehicle);


    } catch (error) {
        res.status(400).json(error);
    }
}


exports.assignVehicle = async (req, res) => {

    const data = req.body;

    try {


        const assyngthevehicle = await VehiclesAppModel.updateOne({ _id: id },
            {
                $set: {
                    placa: inf.placa,
                    marca: inf.marca,
                    modelo: inf.modelo,
                    puertas: inf.puertas,
                    tipo: inf.tipo,
                    disponible: inf.disponible

                }
            })



        res.status(200).json("OHSHET");

    } catch (error) {

        res.status(400).json(error);
    }


}

