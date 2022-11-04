import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import { applyMiddleware, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../redux/features/todos';
import Todos from './Todos';
import thunk from 'redux-thunk';

function App() {
  const store = legacy_createStore(reducer, applyMiddleware(thunk));

  return (
    <>
      <Provider store={store}>
        <div className='app'>
          <Header />
          <Form />
          <Todos />
        </div>
      </Provider>
    </>
  );
}

export default App;
