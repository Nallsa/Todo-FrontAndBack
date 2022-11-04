import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTodos } from '../redux/features/todos';

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startTodos());
  });
  return <div className='header'>Список дел</div>;
};

export default Header;
