const { DataTypes } = require("sequelize");
const baseDatos=require('../dataBase/conexion.js');

const Parqueadero=baseDatos.define('Parqueadero',{

    totales:{
        type:DataTypes.INTEGER
    },
    disponibles:{
        type:DataTypes.INTEGER
    },
    reservados:{
        type:DataTypes.INTEGER
    }


})

module.exports=Parqueadero