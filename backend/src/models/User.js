const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
}, {
    timestamps: true
});

// MongoDB crea una modelo llamado "USER"
module.exports = model('User', userSchema);