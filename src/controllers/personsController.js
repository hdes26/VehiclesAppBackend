const HistoryVehicles = require("../models/HistoryVehicle");
const PersonsAppModel = require("../models/searchPerson");





//Devuelve todas las personas
exports.allPerson = async (req, res) => {
    try {
        const PersonsApp = await PersonsAppModel.find();
        console.log(PersonsApp)
        res.json({
            PersonsApp
        });

    } catch (error) {
        res.json(error)
    }
}
//Crea una nueva persona
exports.createPerson = async (req, res) => {

    try {
        const inf = req.body;
        console.log(inf.vehiculo.placa);
        const person = new PersonsAppModel({
            id: inf.id,
            nombres: inf.nombres,
            apellidos:inf.apellidos,
            fecha_nacimiento: inf.fecha_nacimiento,
            identificacion: inf.identificacion,
            profesion_oficio: inf.profesion_oficio,
            casado: inf.casado,
            ingresos_mensuales: inf.ingresos_mensuales,
            vehiculo: inf.vehiculo,


        })
        const Vehicle = new HistoryVehicles({
            id: inf.vehiculo.id,
            placa: inf.vehiculo.placa,
            marca: inf.vehiculo.marca,
            modelo: inf.vehiculo.modelo,
            puertas: inf.vehiculo.puertas,
            tipo: inf.vehiculo.tipo,
        });


        const resultadoHistory = await Vehicle.save();
        const resultado = await person.save();

        console.log(resultadoHistory)
        console.log(resultado);


        res.json('Persona creado');

    } catch (error) {
        res.json(error)
    }
}
//Actualiza la informacion de una persona ya creada
exports.upgradePerson = async (req, res) => {
    try {

        let { id } = req.params
        const inf = req.body.person;
        const person = await PersonsAppModel.updateOne({ _id: id },
            {
                $set: {
                    nombres: inf.nombres,
                    fecha_nacimiento: inf.fecha_nacimiento,
                    identificacion: inf.identificacion,
                    profesion_oficio: inf.profesion_oficio,
                    casado: inf.casado,
                    ingresos_mensuales: inf.ingresos_mensuales,
                    vehiculo: inf.vehiculo,

                }
            })

        res.json('Persona actualizada');

    } catch (error) {
        console.log(error)
    }
}
//Elimina una persona
exports.deletePerson = async (req, res) => {
    try {
        let { id } = req.params;
        const persona = await PersonsAppModel.deleteOne({ _id: id });
        console.log(persona);
        res.json('Usuario eliminado')

    } catch (error) {
        res.json(error)
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

        res.json('Persona actualizada');

    } catch (error) {
        console.log(error)
    }
}