const { Sequelize } = require('sequelize');

const baseDatos=new Sequelize("jueves","root","",{
    host:"localhost",
    dialect:"mysql"
})

module.exports=baseDatos