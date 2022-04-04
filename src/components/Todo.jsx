import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, patchTodo } from '../redux/todos';
import PropTypes from 'prop-types'

const Todo = ({ img, text, completed, id }) => {

  const dispatch = useDispatch()

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handlePatchTodo = (id, completed) => {
    dispatch(patchTodo(id, completed))
  }

  return (
    <div>
      <ul className='list'>
        <li className={completed ? 'completed' : 'listItem'}>
          <input
            className='checkbox'
            type="checkbox"
            onChange={() => handlePatchTodo(id, completed)}
            checked={completed} />
          <div className='listText'>{text}</div>
          <div onClick={() => handleDeleteTodo(id)}><img style={{ width: '30px' }} src={img} alt="" /></div>
        </li>
      </ul>
    </div>
  );
};

Todo.propType = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired

}

export default Todo;