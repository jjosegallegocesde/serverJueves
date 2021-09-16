const {buscarInfoCarro}=require('../services/carroServicio.js');
const {buscarInfoCarros}=require('../services/carroServicio.js');
const {registrarIngresoCarro}=require('../services/carroServicio.js');
const {registrarSalidaCarro}=require('../services/carroServicio.js');
const {editarInfoParqueadero}=require('../services/parqueaderoServicio.js');

const { request,response }=require('express');

async function buscarCarro(peticion=request, respuesta=response){

    let id=peticion.params.id

    try{

        //Llamo al servicio para traer la info
        const carroInfo=await buscarInfoCarro(id)
        respuesta.status(200).json({  
            estado:true,
            mensaje:carroInfo
        })

    }catch(error){

        respuesta.status(404).json({  
            estado:false,
            mensaje:error
        })

    }

}

async function buscarCarros(peticion=request, respuesta=response){

    try{

        //Llamo al servicio para traer la info
        const carrosInfo=await buscarInfoCarros()
        respuesta.status(200).json({  
            estado:true,
            mensaje:carrosInfo
        })

    }catch(error){

        respuesta.status(404).json({  
            estado:false,
            mensaje:error
        })

    }

}

async function ingresarCarro(peticion=request, respuesta=response){

    
    let datosCarro= peticion.body;

    try{

        //Llamo al servicio para traer la info
        const actualizoParqueadero= await editarInfoParqueadero(160)
        const carroIngresado= await registrarIngresoCarro(datosCarro)
        respuesta.status(200).json({  
            estado:true,
            parqueadero:actualizoParqueadero,
            mensaje:carroIngresado
        })

    }catch(error){

        respuesta.status(404).json({  
            estado:false,
            mensaje:error
        })

    }

    


}

async function retirarCarro(peticion=request, respuesta=response){

    let id=peticion.params.id
    let datosCarro= peticion.body;

    try{

        //Llamo al servicio para traer la info
        const carroRetirado= await registrarSalidaCarro(id,datosCarro)
        respuesta.status(200).json({  
            estado:true,
            mensaje:carroRetirado
        })

    }catch(error){

        respuesta.status(404).json({  
            estado:false,
            mensaje:error
        })

    }

}

module.exports={
    buscarCarro,
    buscarCarros,
    ingresarCarro,
    retirarCarro
}