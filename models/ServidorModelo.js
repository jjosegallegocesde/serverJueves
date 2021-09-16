const express = require('express')
const cors = require('cors')

const baseDatos=require('../dataBase/conexion.js')
const rutas=require('../routes/rutas.js')

class ServidorModelo{

    constructor() {

        this.app = express()
        this.despertarBaseDatos()
        this.crearMiddlewares()
        this.llamarRutas()

    }

    despertarServidor(){
        this.app.listen(8080,function(){
            console.log("servidor encendido")
        })
    }

    llamarRutas(){
        
        this.app.use('/',rutas)

    }

    crearMiddlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    async despertarBaseDatos(){

        try{
            await baseDatos.authenticate();
            console.log("Estoy conetado a la bd")

        }catch(error){
            throw new Error(error)
        }

    }


}

module.exports=ServidorModelo