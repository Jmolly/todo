const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "EDIT_TODO";
const SAVE_TODO = "SAVE_TODO";

export const addTodo = (text, id, dueDate) => ({
  type: ADD_TODO,
  text,
  id,
  dueDate
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

export const editTodo = (id) => ({
  type: EDIT_TODO,
  id,
});

export const saveTodo = (text, id) => ({
  type: SAVE_TODO,
  text,
  id
});
