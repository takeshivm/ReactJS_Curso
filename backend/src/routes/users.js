const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Users routes'));
    //.post()
    //.put() // Actualiza todo el objeto
    //.delete()
    //.patch() // Actualiza solo una propiedad de ese objeto

module.exports = router;