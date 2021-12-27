import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';

describe('Testando o componente App', () => {
  beforeEach(cleanup);
  const inputContent = 'todo-content-input';
  const addTodoBtn = 'todo-add-btn';
  const todosFilter = 'todo-filter-select';
  test('Verifica se os botoes inciais estao na tela', () => {
    renderWithRedux(<App />);
    const inputTodo = screen.getByTestId(inputContent);
    const todoAddBtn = screen.getByTestId(addTodoBtn);
    const todoFilterSelect = screen.getByTestId(todosFilter);
    expect(inputTodo).toBeInTheDocument();
    expect(todoAddBtn).toBeInTheDocument();
    expect(todoFilterSelect).toBeInTheDocument();
  });
  test('Verifica se todos os filtros estao presentes', () => {
    renderWithRedux(<App />);

    const FILTER_OPTIONS_TOTAL = 3;
    const todoFilterSelect = screen.getByTestId(todosFilter);
    const filterOptions = screen.getAllByTestId('filter-option');

    expect(todoFilterSelect).toBeInTheDocument();
    expect(filterOptions).toHaveLength(FILTER_OPTIONS_TOTAL);
    expect(filterOptions[0]).toHaveTextContent(/todos/i);
    expect(filterOptions[1]).toHaveTextContent(/concluidos/i);
    expect(filterOptions[2]).toHaveTextContent(/incompletos/i);
  });
  test('Verifica se o todo e adicionado corretamente', () => {
    renderWithRedux(<App />);

    const inputTodo = screen.getByTestId(inputContent);
    const todoAddBtn = screen.getByTestId(addTodoBtn);

    userEvent.type(inputTodo, 'Testando...');
    userEvent.click(todoAddBtn);

    const task = screen.getByTestId('task');
    expect(task).toBeInTheDocument();
    expect(task).toHaveTextContent(/testando.../i);

    userEvent.type(inputTodo, 'Testando2...');
    userEvent.click(todoAddBtn);

    expect(screen.getAllByTestId('task')).toHaveLength(2);
    expect(screen.getAllByTestId('task')[1]).toHaveTextContent(/testando2.../i);
  });

  test('Verifica se as funcionalidades do todo funcionam', () => {
    const { store } = renderWithRedux(<App />);

    const inputTodo = screen.getByTestId(inputContent);
    const todoAddBtn = screen.getByTestId(addTodoBtn);

    userEvent.type(inputTodo, 'Testando...');
    userEvent.click(todoAddBtn);

    const task = screen.getByTestId('task');
    expect(task).toBeInTheDocument();
    expect(task).toHaveTextContent(/testando.../i);

    const addTaskToComplete = screen.getByTestId('add-task-to-complete');
    const trashBtn = screen.getByTestId('remove-task-btn');

    expect(addTaskToComplete).toBeInTheDocument();
    expect(trashBtn).toBeInTheDocument();
    expect(trashBtn).toBeDisabled();
    expect(task).toHaveClass('task');

    userEvent.click(screen.getByTestId('item'));
    expect(screen.getByTestId('task')).toHaveClass('selected');
    const selectedTodosInRedux = store.getState().todos.selectedTodos;
    expect(selectedTodosInRedux).toHaveLength(1);
    expect(trashBtn).toBeEnabled();

    userEvent.dblClick(screen.getByTestId('item'));
    expect(screen.getByTestId('task')).toHaveClass('task-completed');
    const completedTodosInRedux = store.getState().todos.completedTasks;
    expect(completedTodosInRedux).toHaveLength(1);

    userEvent.dblClick(screen.getByTestId('item'));
    expect(screen.getByTestId('task')).not.toHaveClass('task-completed');
    const completedTodosInReduxAfter = store.getState().todos.completedTasks;
    expect(completedTodosInReduxAfter).toHaveLength(0);

    userEvent.click(trashBtn);

    expect(screen.queryByTestId('task')).not.toBeInTheDocument();
    const todoList = store.getState().todos.myTodos;
    expect(todoList).toHaveLength(0);
  });
});
