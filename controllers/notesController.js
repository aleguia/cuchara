const express = require("express");
const router = express.Router();
const user = require("../models/user.js");

//Ver su listado de notas (en el listado sólo se ven los títulos)
router.get("/", (req, res) => {
  let notes = user.notes;
  let formattedNotes = notes.map((note) => {
    return { id: note.id, titulo: note.titulo };
  });
  res.send({ notas: formattedNotes });
});

//Crear una nota: título, texto y categoría única (fijas).
router.post("/", (req, res) => {

  let { titulo, texto, categoria } = req.body;
    let newNote = {
        id: Date.now(),
        titulo,
        texto,
        categoria,
      }
  user.notes.push(newNote);

  res.send({ notas: [newNote] });
});

//Visualizar una nota
router.get("/:noteId", (req, res) => {
  let filteredNotes = user.notes.filter((note) => note.id == req.params.noteId);
  res.send({ notas: filteredNotes });
});

//Modificar sus notas: título, texto y categoría
router.patch("/:noteId", (req, res) => {
  //buscar la nota
  let idx = user.notes.findIndex((note) => note.id == req.params.noteId);
  let { id, ...otrosAtributos } = req.body;

  user.notes[idx] = {
    id: note.id,
    ...otrosAtributos,
  };

  res.send({ notas: [user.notes[idx]] });
});

module.exports = router;
