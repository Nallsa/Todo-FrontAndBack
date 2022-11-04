import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/todos';

const Form = props => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(false);

  function handleAdd(textTodo) {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, '400');

    dispatch(addTodo(textTodo));
    setText('');
  }

  return (
    <div className='form'>
      <input
        type='text'
        placeholder='Введите текст...'
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        disabled={disabled}
        onClick={() => {
          handleAdd(text);
        }}
      >
        добавить
      </button>
    </div>
  );
};

export default Form;
