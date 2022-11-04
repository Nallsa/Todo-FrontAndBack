import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, makeFavorite } from '../redux/features/todos';

const Todos = props => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);

  const loader = useSelector(state => state.loader);

  function delTodo(id) {
    dispatch(deleteTodo(id));
  }

  function Favorite(id, fv) {
    dispatch(makeFavorite(id, fv));
  }

  return (
    <div className='todos'>
      {loader
        ? 'Идет загрузка...'
        : todos.map((todo, indexTodo) => {
            return (
              <div className={`todo ${todo.favorite ? 'selected' : ''}`}>
                <div className='favorite'>
                  <button onClick={() => Favorite(todo._id, todo.favorite)}>
                    ★
                  </button>
                </div>
                <div className='todo-text'>{todo.text}</div>
                <div className='actions'>
                  <button onClick={() => delTodo(todo._id)}>Delete</button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Todos;
