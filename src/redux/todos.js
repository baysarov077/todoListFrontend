const initialState = {
  todos: [],
  loading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getTodos':
      return {
        ...state,
        loading: false,
        todos: action.payload,
      }
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false
      }
    case 'deleteTodo':
      return {
        ...state,
        todos: state.todos.filter(item => action.payload !== item._id),
        loading: false
      }
    case 'patchTodo':
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item._id === action.payload) {
            item.completed = !item.completed
            return item
          }
          return item
        }),
        loading: false
      }
    case "load/pending":
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
};

export const loadTodos = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:4000/todo')
      const todos = await res.json()
      dispatch({ type: 'getTodos', payload: todos })
    } catch (e) {
      console.log(e);
    }
  }
}

export const addTodos = (value) => {
  return async (dispatch) => {
    dispatch({type: 'load/pending'})
    try {
      const res = await fetch('http://localhost:4000/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: value
        })
      })
      const data = await res.json()
      dispatch({ type: 'addTodo', payload: data })
    } catch (e) {
      console.log(e);
    }
  }
}

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({type: 'load/pending'})
    try {
      await fetch(`http://localhost:4000/todo/${id}`, {
        method: 'DELETE'
      })
      dispatch({ type: 'deleteTodo', payload: id })
    } catch (e) {
      console.log(e);
    }
  }
}

export const patchTodo = (id, completed) => {
  return async (dispatch) => {
    dispatch({type: 'load/pending'})
    try {
      await fetch(`http://localhost:4000/todo/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          completed: !completed
        })
      })
      dispatch({ type: 'patchTodo', payload: id })
    } catch (e) {
      console.log(e);
    }
  }
}