const initialState = {
  todos: [
    {
      id: 1,
      title: 'Todo 1',
      text: 'Something that I need to do.',
      completed: false
    },
    {
      id: 2,
      title: 'Todo 2',
      text: 'Some other thing that I need to do.',
      completed: false
    },
    {
      id: 3,
      title: 'Todo 3',
      text: 'A third thing that that I need to do.',
      completed: true
    }
  ]
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          completed: false
        }
      ]
    case 'FETCH_TODO':
      return state.map(todo =>
        fetchTodo(todo, action)
      )
    default:
      return state
  }
}

const fetchTodo = (todo, action) => {
  if (state.id !== action.id) {
    return state
  }
};

export default todos
