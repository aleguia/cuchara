const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('metodo get de notas')
    res.send('ok desde notas')
})

//Crear una nota: título, texto y categoría única (fijas).

router.post('/',(req, res) => {
    console.log(req.body)
    res.send('todo bien')
})

module.exports = router