
class ModelMem {
    constructor() {
            this.votos = []
    }
    
    guardarVoto = async voto => {
        let nuevoVoto = {};

        nuevoVoto.distrito = voto.distrito
        nuevoVoto.candidato = voto.candidato
        console.log("agregamos: " + JSON.stringify(nuevoVoto))
        this.votos.push(nuevoVoto)
        console.log("votos: " + JSON.stringify(this.votos))

    }

    obtenerVotos = async () => {    
        return await this.votos
    }
    
}

export default ModelMem