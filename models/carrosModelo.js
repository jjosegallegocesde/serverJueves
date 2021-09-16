const { DataTypes } = require("sequelize");
const baseDatos=require('../dataBase/conexion.js');

const Carro=baseDatos.define('Carro',{
    id:{
        primaryKey:true,
        type:DataTypes.STRING
    },
    conductor:{
        type:DataTypes.STRING
    },
    entrada:{
        type:DataTypes.DATE
    },
    salida:{
        type:DataTypes.DATE
    },
    estado:{
        type:DataTypes.BOOLEAN
    },
    pago:{
        type:DataTypes.INTEGER
    }
})

module.exports=Carro