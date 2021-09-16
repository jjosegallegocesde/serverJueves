const {buscarInfoParqueadero}=require('../services/parqueaderoServicio.js');
const { request,response }=require('express');

async function buscarParqueadero(peticion=request, respuesta=response){

    let id=peticion.params.id

    try{

        //Llamo al servicio para traer la info
        const parqueaderoInfo=await buscarInfoParqueadero(id)
        respuesta.status(200).json({  
            estado:true,
            mensaje:parqueaderoInfo
        })

    }catch(error){

        respuesta.status(404).json({  
            estado:false,
            mensaje:error
        })

    }

}

module.exports={
    buscarParqueadero
}