const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },
    author: String
}, {
    timestamps: true
});

// MongoDB crea una modelo llamado "NOTE"
module.exports = model('Note', noteSchema);
