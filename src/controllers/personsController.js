const HistoryVehicles = require("../models/HistoryVehicle");
const PersonsAppModel = require("../models/searchPerson");





//Devuelve todas las personas
exports.allPerson = async (req, res) => {
    try {
        const PersonsApp = await PersonsAppModel.find();
        console.log(PersonsApp)
       res.status(200).json({
            PersonsApp
        });

    } catch (error) {
        res.status(400).json(error);
    }
}
//Crea una nueva persona
exports.createPerson = async (req, res) => {

    try {
        const inf = req.body;
        const person = new PersonsAppModel({
            id: inf.id,
            nombres: inf.nombres,
            apellidos:inf.apellidos,
            fecha_nacimiento: inf.fecha_nacimiento,
            identificacion: inf.identificacion,
            profesion_oficio: inf.profesion_oficio,
            casado: inf.casado,
            ingresos_mensuales: inf.ingresos_mensuales,


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
        const person = await PersonsAppModel.updateOne({ _id: id },
            {
                $set: {
                    nombres: inf.nombres,
                    apellidos:inf.apellidos,
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
        const persona = await PersonsAppModel.deleteOne({ _id: id });
        console.log(persona);
        res.status(200).json('Usuario eliminado');

    } catch (error) {
        res.status(400).json(error);
    }
}

//Actualizar vehiculo de una persona
exports.upgradeHistorialPerson = async (req, res) => {
    try {

        let { id } = req.params
        const inf = req.body;
        const vehicle = await PersonsAppModel.updateOne({ _id: id },
            {
                $set: {
                    vehiculo: inf.vehiculo,

                }
            })

            const Vehicle = new HistoryVehicles({
                id: inf.id,
                placa: inf.vehiculo.placa,
                marca: inf.vehiculo.marca,
                modelo: inf.vehiculo.modelo,
                puertas: inf.vehiculo.puertas,
                tipo: inf.vehiculo.tipo,
            });
    
    
            const resultadoHistory = await Vehicle.save();
            console.log(resultadoHistory);

            res.status(200).json('Persona actualizada');

    } catch (error) {
        res.status(400).json(error);
    }
}

