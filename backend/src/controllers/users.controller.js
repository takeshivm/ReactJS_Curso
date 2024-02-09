const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const Users = await User.find();
    res.json(Users)
};
usersCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    console.log(newUser);
    await newUser.save();
    res.json({ message: 'User created' })
};

usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
};

// ACTUALIZAR
usersCtrl.updateUser = async(req, res) => {
    const { username } = req.body;
    //await Note.findByIdAndUpdate(req.params.id, {
    await User.findOneAndUpdate({_id: req.params.id}, {
        username})
    res.send({ message: 'User updated' })
};

usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.send({ message: 'User deleted' })
};

module.exports = usersCtrl;