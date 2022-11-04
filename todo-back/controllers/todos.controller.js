const Todos = require('../Models/Todos.model');

module.exports.todoController = {
  getTodo: async (req, res) => {
    const get = await Todos.find();
    res.json(get);
  },
  postTodo: async (req, res) => {
    const { text, favorite } = req.body;

    const post = await Todos.create({
      text,
      favorite,
    });
    res.json(post);
  },
  patchTodo: async (req, res) => {
    const { text, favorite } = req.body;

    const patch = await Todos.findByIdAndUpdate(req.params.id, {
      text,
      favorite,
    });
    res.json(patch);
  },
  deleteTodo: async (req, res) => {
    const del = await Todos.findByIdAndRemove(req.params.id);
    res.json(del);
  },
};
