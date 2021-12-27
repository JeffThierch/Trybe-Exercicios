import {
  ADD_TODO,
  REMOVE_TODO,
  SELECT_TODO,
  COMPLETE_TASK,
  FILTER_TASK } from '../actions';

const INITIAL_STATE = { myTodos: [],
  selectedTodos: [],
  completedTasks: [],
  filterType: 'all' };

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TODO:
    return { ...state, myTodos: [...state.myTodos, action.todo] };

  case REMOVE_TODO:
    return ({ ...state,
      myTodos: state.myTodos.filter(({ todoId }) => todoId !== action.todo.todoId),
      selectedTodos: state.selectedTodos.filter(({ todoId }) => (
        todoId !== action.todo.todoId
      )) });

  case SELECT_TODO: {
    const { todo: { todoId: id } } = action;
    const isSelected = state.selectedTodos.some(({ todoId }) => todoId === id);
    const filterList = state.selectedTodos.filter(({ todoId }) => todoId !== id);
    return isSelected ? { ...state, selectedTodos: filterList } : (
      { ...state, selectedTodos: [...state.selectedTodos, action.todo] }
    );
  }

  case COMPLETE_TASK: {
    const isCompleted = state.completedTasks.some((todoName) => todoName === action.todo);
    const filterList = state.completedTasks.filter(
      (todoName) => todoName !== action.todo,
    );
    return isCompleted ? { ...state, completedTasks: filterList } : (
      { ...state, completedTasks: [...state.completedTasks, action.todo] }
    );
  }

  case FILTER_TASK:
    return { ...state, filterType: action.filter };

  default:
    return state;
  }
};

export default todos;
