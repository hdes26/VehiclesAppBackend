
const HistoryPersons = require("../models/HistoryPerson");
const VehiclesAppModel = require("../models/searchVehicles");


//Devuelve todas las personas
exports.allVehicles = async (req, res) => {
    try {
        const VehiclesApp = await VehiclesAppModel.find();
        console.log(VehiclesApp);
        res.json({
            VehiclesApp
        });

    } catch (error) {
        res.json(error)
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

        })
/* 
        const Person = new HistoryPersons({
            id: inf.id,
            nombres: inf.person.nombres,
            apellidos:inf.person.apellidos,
            fecha_nacimiento:inf.person.fecha_nacimiento,
            identificacion: inf.person.identificacion,
            profesion_oficio: inf.person.profesion_oficio,
            casado: inf.person.casado,
            ingresos_mensuales: inf.person.ingresos_mensuales,
        }); */



        /* const resultadoHistory = await Person.save(); */
        const resultado = await vehicle.save()

        console.log(resultadoHistory);
        console.log(resultado);

        res.json('Vehiculo creado');

    } catch (error) {
        res.json(error)
    }

}
//Actualiza la informacion de una persona ya creada
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

                }
            })
        res.json('Vehiculo actualizado');
    } catch (error) {
        console.log(error)
    }

}
//Elimina una persona
exports.deleteVehicle = async (req, res) => {

    try {
        let { id } = req.params;
        const vehicle = await VehiclesAppModel.deleteOne({ _id: id });
        console.log(vehicle);
        res.json('Usuario eliminado')

    } catch (error) {
        res.json(error)
    }

}

//Actualizar dueño de un vehiculo
exports.upgradeHistorialVehicle = async (req, res) => {
    try {

        let { id } = req.params
        const inf = req.body;
        const person = await VehiclesAppModel.updateOne({ _id: id },
            {
                $set: {
                    person: inf.person,

                }
            })

        const Person = new HistoryPersons({
            id: inf.id,
            nombres: inf.person.nombres,
            apellidos:inf.person.apellidos,
            fecha_nacimiento:inf.person.fecha_nacimiento,
            identificacion: inf.person.identificacion,
            profesion_oficio: inf.person.profesion_oficio,
            casado: inf.person.casado,
            ingresos_mensuales: inf.person.ingresos_mensuales,
            vehiculo: inf.person.vehiculo,
        });



        const resultadoHistory = await Person.save();
        console.log(resultadoHistory);

        res.json('Persona actualizada');

    } catch (error) {
        console.log(error)
    }
}