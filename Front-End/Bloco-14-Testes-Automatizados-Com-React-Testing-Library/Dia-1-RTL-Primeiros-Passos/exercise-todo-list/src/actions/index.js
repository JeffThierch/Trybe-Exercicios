export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SELECT_TODO = 'SELECT_TODO';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const FILTER_TASK = 'FILTER_TASK';



export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
})

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
})

export const selectTodo = (todo) => ({
  type: SELECT_TODO,
  todo
})

export const completeTask = (todo) => ({
  type: COMPLETE_TASK,
  todo
})

export const filterTask = (filter) => ({
  type: FILTER_TASK,
  filter
})