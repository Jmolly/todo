export const reducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ];

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'SAVE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text, dueDate: action.payload.date } : todo
      );

    default:
      return state;
  }
};
