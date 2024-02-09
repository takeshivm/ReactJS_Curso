const notesCtrl = {};

// Modelo notes
const Note = require('../models/Note');


// Este objeto tiene una funcion "getNotes"
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find() // Devuelve un arreglo con todas las notas
    //res.json({ message: [] })
    res.json(notes)
};
notesCtrl.createNote = (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    console.log(newNote);
    newNote.save();
    res.json({ message: 'Note saved' })
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.send(note);
};

// ACTUALIZAR
notesCtrl.updateNote = async(req, res) => {
    const { title, content, author } = req.body;
    //await Note.findByIdAndUpdate(req.params.id, {
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        content
    })
    res.send({ message: 'Note updated' })
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.send({ message: 'Note deleted' })
};


module.exports = notesCtrl;