import express from 'express'
import Controlador from '../controlador/voto.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        //para la carga de votos
        this.router.post('/', this.controlador.guardarVoto)
        this.router.get('/generales', this.controlador.obtenerGenerales)

        return this.router
    }
}

export default Router