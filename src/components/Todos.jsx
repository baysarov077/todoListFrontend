import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, patchTodo } from '../redux/todos';
import image from './img/buc.png'

const Todos = () => {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handlePatchTodo = (id, completed) => {
    dispatch(patchTodo(id, completed))
  }

  const loading = useSelector(state => state.loading)

  return (
    <>
      {loading ? <div>...идет загрузка</div> :
      <div>
        <h1 style={{color: 'blue'}}>Всего дел: {todos.length}</h1>
      <ul className='list'>
        {todos.map(item => {
          return (
            <li className={item.completed ? 'completed' : 'listItem'} key={item._id}>
              <input
                className='checkbox'
                type="checkbox"
                onChange={() => handlePatchTodo(item._id, item.completed)}
                checked={item.completed} />
              <div className='listText'>{item.text}</div>
              <div onClick={() => handleDeleteTodo(item._id)}><img style={{width: '30px'}} src={image} alt="" /></div>
              </li>
          )
        })}
      </ul>
    </div>
    }
    </>
  );
};

export default Todos;