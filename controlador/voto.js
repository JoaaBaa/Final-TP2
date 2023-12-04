import Servicio from '../servicio/voto.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }
    
    guardarVoto = async (req,res) => {
        try {
            const voto = req.body
            await this.servicio.guardarVoto(voto)
            res.send("Voto cargado")   
        } catch (error) {
            console.error("Error al guardar el voto:", error);
            res.status(400).send("zona no correspondiente o candidato no válido");
        }        
    }

    obtenerGenerales = async (req,res) => {
        try {
            const generales = await this.servicio.obtenerGenerales()
            console.log(generales);
            res.json(generales)
        } catch (error) {
            res.status(500).json({ error: error.message });

        }
        
    }

}

export default Controlador
