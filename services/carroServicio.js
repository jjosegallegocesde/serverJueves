const Carro=require('../models/carrosModelo.js')

async function buscarInfoCarro(id){
    return await Carro.findByPk(id)
}

async function buscarInfoCarros(){
    return await Carro.findAll();
}

async function registrarIngresoCarro(carroInfo){

    carroInfo.entrada=new Date();
    carroInfo.pago=0;
    carroInfo.estado=true;

    let carroIngresado= new Carro(carroInfo)
    return await carroIngresado.save()

}

async function registrarSalidaCarro(id,datosCarro){

    let carroInfo=await Carro.findByPk(id)

    let fechaEntrada=carroInfo.entrada
    let fechaSalida=new Date();
    let diferencia=fechaSalida.getTime()-fechaEntrada.getTime()
    let minutos=Math.round(diferencia/60000)

    datosCarro.pago=minutos*100;
    datosCarro.salida=fechaSalida

    return await carroInfo.update(datosCarro)




}



module.exports={
    buscarInfoCarro,
    buscarInfoCarros,
    registrarIngresoCarro,
    registrarSalidaCarro
}