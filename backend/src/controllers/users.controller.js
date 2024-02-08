const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({ message: [] });
usersCtrl.createUser = (req, res) => res.json({ message: 'User saved' });

usersCtrl.getUser = (req, res) => res.send({ title: 'One User with title' });
usersCtrl.updateUser = (req, res) => res.send({message: 'User updated'});
usersCtrl.deleteUser = (req, res) => res.send({message: 'User deleted'});

module.exports = usersCtrl;