import express from 'express'
import RouterVoto from'./router/voto.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/voto', express.static('public'));

// -----------------------------------------------
//         API RESTful : Voto
// -----------------------------------------------
app.use('/voto', new RouterVoto().start())

// -----------------------------------------------
//        LISTEN DEL SERVIDOR EXPRESS
// -----------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
