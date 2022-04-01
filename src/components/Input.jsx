import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../redux/todos';

const Input = () => {

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleAddTodo = () => {
    setValue('')
    dispatch(addTodos(value))
  }


  return (
    <>
      <div className='inputBlock'>
        <input
          className='mainInput'
          onChange={e => handleChange(e)}
          value={value}
          type="text" />
        <button className='addBtn' onClick={handleAddTodo}>Добавить</button>
      </div>
    </>
  );
};

export default Input;