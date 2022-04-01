import React, { useEffect } from 'react';
import Input from './Input';
import Todos from './Todos';
import './componentsStyles.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../redux/todos';

const App = () => {
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch])
  return (
    <>
    {loading ? <div>...идет загрузка</div> :
    <div className='container'>
      <div className='todosBlock'>
      <Todos />
      </div>
      <div className='inputBlock'>
      <Input />
      </div>
    </div>
  }
    </>
  );
};

export default App;