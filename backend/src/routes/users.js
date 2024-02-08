const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)
    //.put() // Actualiza todo el objeto
    //.delete()
    //.patch() // Actualiza solo una propiedad de ese objeto

module.exports = router;