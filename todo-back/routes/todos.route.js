const { Router } = require('express');
const { todoController } = require('../controllers/todos.controller');
const router = Router();

router.get('/todo', todoController.getTodo);
router.post('/todo', todoController.postTodo);
router.patch('/todo/:id', todoController.patchTodo);
router.delete('/todo/:id', todoController.deleteTodo);

module.exports = router;
