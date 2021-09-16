const {Router}=require('express')
const rutas=Router()

const {buscarParqueadero}=require('../controllers/parqueaderoControlador.js')

const {buscarCarro}=require('../controllers/carroControlador.js')
const {buscarCarros}=require('../controllers/carroControlador.js')
const {ingresarCarro}=require('../controllers/carroControlador.js')
const {retirarCarro}=require('../controllers/carroControlador.js')



//Ruta para buscar la info de 1 parqueadero
rutas.get('/IS/V1/parqueaderos/:id',buscarParqueadero)

//Ruta para buscar la info de Todos los carros
rutas.get('/IS/V1/carros/',buscarCarros)

//Ruta para buscar la info de 1 solo carro
rutas.get('/IS/V1/carros/:id',buscarCarro)

//Ruta para ingresar(insertar) 1 carro
rutas.post('/IS/V1/carros/',ingresarCarro)

//Ruta para sacar(editar) 1 carro
rutas.put('/IS/V1/carros/:id',retirarCarro)


module.exports=rutas