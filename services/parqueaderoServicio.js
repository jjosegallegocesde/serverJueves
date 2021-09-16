const Parqueadero=require('../models/parqueaderoModelo.js')

async function buscarInfoParqueadero(id){

    return await Parqueadero.findByPk(id)

}

async function editarInfoParqueadero(id){

    let parqueaderoInfo=await Parqueadero.findByPk(id);

    let cambioDatos={
        disponibles:parqueaderoInfo.disponibles-1,
        reservados:parqueaderoInfo.reservados+1
    }

    return await parqueaderoInfo.update(cambioDatos)

}



module.exports={
    buscarInfoParqueadero,
    editarInfoParqueadero
}