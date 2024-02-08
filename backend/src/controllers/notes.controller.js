const notesCtrl = {};

// Este objeto tiene una funcion "getNotes"
notesCtrl.getNotes = (req, res) => res.json({ message: [] });
notesCtrl.createNote = (req, res) => res.json({ message: 'Note saved' });

notesCtrl.getNote = (req, res) => res.send({ title: 'One Note with title' });
notesCtrl.updateNote = (req, res) => res.send({message: 'Note updated'});
notesCtrl.deleteNote = (req, res) => res.send({message: 'Note deleted'});


module.exports = notesCtrl;