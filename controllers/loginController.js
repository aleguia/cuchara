const express = require('express')
const router = express.Router()

const user = require('../models/user.js')

router.get('/', (req, res) => {
    console.log('Hola Andre login funcionando')
    res.send({mensaje: 'Hola Andre'})
})

//Login: usando email + contraseña
router.post('/login', (req, res) => {

    const {username, password} = req.body

    if(username === user.username && password === user.password){
        res.send({
            mensaje: 'Login exitoso'
        })
    } else {
        res.send({
            mensaje: 'Login fallido'
        })
    }
})

//Registro: pide email + contraseña
router.post('/register', (req, res) => {
    console.log('metodo de registro funcionando')

    const {username, password} = req.body

    user.username = username
    user.password = password

    console.log(user)

    res.send('ok')
})

module.exports = router