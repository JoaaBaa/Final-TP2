import ModelMem from '../model/DAO/votosMemoria.js'
import { validarVoto } from "./validaciones/voto.js"

class Servicio {
    constructor() {
        this.model = new ModelMem()
    }
    
    async guardarVoto(voto){
        const res = validarVoto(voto)
        if(res.result) {
            await this.model.guardarVoto(voto)
        } else {
            throw "validation error"
        }
    }

    async obtenerGenerales(){
        const votos = await this.model.obtenerVotos()

        let votosGenerales = {
            candidatoA: 0,
            candidatoB: 0,
            candidatoC: 0,
            enblanco: 0
        };

        votos.forEach(voto => {
            switch (voto.candidato) {
                case 'candidatoA':
                    votosGenerales.candidatoA++;
                    break;
                case 'candidatoB':
                    votosGenerales.candidatoB++;
                    break;
                case 'candidatoC':
                    votosGenerales.candidatoC++;
                    break;
                case 'enblanco':
                    votosGenerales.enblanco++;
                    break;
                default:
                    break;
            }
        });

        return {"generales": votosGenerales}
    }   
    
}

export default Servicio