const mongoose = require('mongoose');

const todosSchema = mongoose.Schema({
  text: String,
  favorite: Boolean,
});

const Todos = mongoose.model('todos', todosSchema);

module.exports = Todos;
