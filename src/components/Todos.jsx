import React from 'react';
import Todo from './Todo';
import image from './img/buc.png'
import { useSelector } from 'react-redux';

const Todos = () => {

  const todos = useSelector(state => state.todos)

  return (
    <>
      <h1 style={{ color: 'blue' }}>Всего дел: {todos.length}</h1>
      {todos.map(item => {
        return <Todo key={item._id} img={image} text={item.text} completed={item.completed} id={item._id} />
      })}
    </>
  );
};


export default Todos;