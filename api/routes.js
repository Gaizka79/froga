const express = require('express')
const routes  = express.Router();

routes.get('/test', (req, res) => {
    console.log("Petición recibida");
    res.status(200).send("Ager")
})

module.exports = routes;