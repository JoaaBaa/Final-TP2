import Joi from 'joi'

export const validarVoto = voto => {

    const votoSchema = Joi.object({
        distrito: Joi.string().valid('zona1', 'zona2', 'zona3','zona4').required(),
        candidato: Joi.string().valid('candidatoA', 'candidatoB', 'candidatoC', 'enblanco').required()
    });
    
    const {error} = votoSchema.validate(voto)
    if(error) {
        return { result : false, error }
    } 
    return {result: true}



}
