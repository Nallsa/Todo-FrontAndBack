const initialState = {
  todos: [],
  loader: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'todo/fetch/start':
      return {
        ...state,
        todos: action.payload,
        loader: false,
      };

    case 'todo/fetch/add':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'todo/fetch/load':
      return {
        ...state,
        loader: true,
      };
    case 'todo/fetch/delete':
      return {
        ...state,
        todos: state.todos.filter((item, index) => item._id !== action.payload),
      };
    case 'todo/fetch/favorite':
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item._id === action.payload) {
            item.favorite = !item.favorite;
          }
          return item;
        }),
      };

    default:
      return state;
  }
}

export function startTodos() {
  return async dispatch => {
    try {
      dispatch({ type: 'todo/fetch/load' });

      const res = await fetch('http://localhost:3000/todo');
      const todos = await res.json();

      dispatch({ type: 'todo/fetch/start', payload: todos });
    } catch (e) {
      console.log(e);
    }
  };
}

export function addTodo(textTodo) {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:3000/todo', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ text: textTodo, favorite: false }),
      });
      const todo = await res.json();
      dispatch({ type: 'todo/fetch/add', payload: todo });
    } catch (e) {
      console.log(e);
    }
  };
}

export function deleteTodo(id) {
  return async dispatch => {
    const res = await fetch(`http://localhost:3000/todo/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });

    dispatch({ type: 'todo/fetch/delete', payload: id });
  };
}

export function makeFavorite(id, fv) {
  return async dispatch => {
    await fetch(`http://localhost:3000/todo/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({ favorite: !fv }),
    });
    dispatch({ type: 'todo/fetch/favorite', payload: id });
  };
}
