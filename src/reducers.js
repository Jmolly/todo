export const reducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          dueDate: action.dueDate,
          completed: false
        }
      ];

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'SAVE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text, dueDate: action.date } : todo
      );

    default:
      return state;
  }
};
