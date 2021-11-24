
const VehiclesModel = require("../models/vehiclesModel");
const PersonsModel = require("../models/personModel");
const HistorialModel = require("../models/historyModel");



//Devuelve todas las personas
exports.allVehicles = async (req, res) => {
    try {
        const VehiclesApp = await VehiclesModel.find();

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
        const vehicle = new VehiclesModel({

            placa: inf.placa,
            marca: inf.marca,
            modelo: inf.modelo,
            puertas: inf.puertas,
            tipo: inf.tipo,
            disponible: true

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
        const vehicle = await VehiclesModel.updateOne({ _id: id },
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
        const vehicle = await VehiclesModel.deleteOne({ _id: id });
        console.log(vehicle);
        res.status(200).json('Usuario eliminado');

    } catch (error) {
        res.status(400).json(error);

    }

}

//Historial vehiculos disponibles
exports.availableVehicle = async (req, res) => {
    try {

        const avaiblevehicle = await VehiclesModel.find({ casado: false })

        res.status(200).json(avaiblevehicle);


    } catch (error) {
        res.status(400).json(error);
    }
}

exports.assignVehicle = async (req, res) => {

    const { idPerson, idVehicle, date } = req.body;
    try {
        const person = await PersonsModel.findOne({ id: idPerson });
        const vehicle = await VehiclesModel.findOne({ id: idVehicle });
        if (person.vehiculo === null) {
            if (vehicle.disponible === true) {
                person.vehiculo = idVehicle;
                vehicle.disponible = false;
                await person.save();
                await vehicle.save();
                await HistorialModel.create({
                    idPerson,
                    idVehicle: vehicle._id,
                    accion: "adquisicion de vehiculo",
                    date: fecha()
                });
                console.log(person);

                res.status(200).json({ message: "vehiculo asignado correctametne", vehicle })
            } else {
                res.status(403).json({ message: "la el vehiculo no esta disponible" })
            }
        } else {
            res.status(403).json({ message: "la persona ya tiene un vehiculo asignado" });

        }
    } catch (error) {
        res.status(400).json(error);

    }

}
exports.desvincularVehicle = async (req, res) => {

    const { idPerson, date } = req.body;
    try {
        const person = await PersonsModel.findOne({ _id: idPerson });
        if (person.vehiculo != null) {
            const idVehicle = person.vehiculo;
            const vehicle = await VehiclesModel.findOne({ _id: idVehicle });
            person.vehiculo = null;
            vehicle.disponible = true;
            await person.save();
            await vehicle.save();
            await HistorialModel.create({
                idPerson,
                idVehicle,
                accion: "desvinculacion del vehiculo",
                date: fecha()
            });
            console.log(person);
            res.status(200).json({ message: "vehiculo desvinculado correctametne" })


        } else {
            res.status(403).json({ message: "la persona no tiene un vehiculo asignado" });

        }
    } catch (error) {
        res.status(400).json(error);

    }

}

const fecha = () => {
    let hoy = new Date();
    let fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();


    let fechaYHora = fecha + ' ' + hora;

    return fechaYHora;

}
