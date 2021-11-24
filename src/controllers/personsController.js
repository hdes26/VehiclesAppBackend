const HistoryVehicles = require("../models/historyModel");
const PersonsModel = require("../models/personModel");
const VehicleModel = require("../models/vehiclesModel");





//Devuelve todas las personas
exports.allPerson = async (req, res) => {
    try {
        const PersonsApp = await PersonsModel.find();
        console.log(PersonsApp.length)
        for (let i = 0; i < PersonsApp.length; i++) {
            console.log("hola")
            if (PersonsApp[i].vehiculo != null) {
                const vehiclePerson = await VehicleModel.populate(PersonsApp[0], { path: 'vehiculo' });
                PersonsApp[i] = vehiclePerson;
            }
            if (i == PersonsApp.length - 1) {
                console.log(PersonsApp)
                res.status(200).json({
                    PersonsApp
                });
            }
        }


    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
//Crea una nueva persona
exports.createPerson = async (req, res) => {

    try {
        const inf = req.body;
        const person = new PersonsModel({
            id: inf.id,
            nombres: inf.nombres,
            apellidos: inf.apellidos,
            fecha_nacimiento: inf.fecha_nacimiento,
            identificacion: inf.identificacion,
            profesion_oficio: inf.profesion_oficio,
            casado: inf.casado,
            ingresos_mensuales: inf.ingresos_mensuales,
            vehiculo: null

        })

        const resultado = await person.save();
        console.log(resultado);


        res.status(200).json('Persona creado');

    } catch (error) {
        res.status(400).json(error);
    }
}
//Actualiza la informacion de una persona ya creada
exports.upgradePerson = async (req, res) => {
    try {

        let { id } = req.params
        const inf = req.body;
        const person = await PersonsModel.updateOne({ _id: id },
            {
                $set: {
                    nombres: inf.nombres,
                    apellidos: inf.apellidos,
                    fecha_nacimiento: inf.fecha_nacimiento,
                    identificacion: inf.identificacion,
                    profesion_oficio: inf.profesion_oficio,
                    casado: inf.casado,
                    ingresos_mensuales: inf.ingresos_mensuales,

                }
            })

        res.status(200).json('Persona actualizada');

    } catch (error) {
        res.status(400).json(error);
    }
}
//Elimina una persona
exports.deletePerson = async (req, res) => {
    try {
        let { id } = req.params;
        const persona = await PersonsModel.deleteOne({ _id: id });
        console.log(persona);
        res.status(200).json('Usuario eliminado');

    } catch (error) {
        res.status(400).json(error);
    }
}



//Personas disponibles

exports.avaiblePerson = async (req, res) => {
    try {

        const avaiblepersonn = await PersonsModel.find({ vehiculo: null })

        res.status(200).json(avaiblepersonn);


    } catch (error) {
        res.status(400).json(error);
    }
}
