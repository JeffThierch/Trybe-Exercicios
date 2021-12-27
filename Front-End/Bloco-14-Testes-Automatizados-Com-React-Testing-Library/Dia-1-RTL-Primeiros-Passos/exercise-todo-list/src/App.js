import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';
import InputTodo from './InputTodo';
import Item from './Item';
import { removeTodo, completeTask } from './actions/index';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.checkCompleted = this.checkCompleted.bind(this);
    this.checkSelected = this.checkSelected.bind(this);
  }

  checkCompleted(todo) {
    const { completedTasks } = this.props;
    return completedTasks.some(({ todoId }) => todoId === todo.todoId);
  }

  checkSelected(todo) {
    const { selectedTodo } = this.props;
    return selectedTodo.some(({ todoId }) => todoId === todo.todoId);
  }

  render() {
    const {
      listTodo,
      removeTodoFromList,
      selectedTodo, filterType,
      addTaskToComplete } = this.props;
    return (
      <main className="App">
        <InputTodo />
        {listTodo && (
          <ul className="tasks-container">
            {
              listTodo.filter((todo) => {
                if (filterType === 'completed') {
                  const isTodoCompleted = this.checkCompleted(todo);
                  return isTodoCompleted;
                }
                if (filterType === 'uncompleted') {
                  const isTodoCompleted = this.checkCompleted(todo);
                  return !isTodoCompleted;
                }
                return true;
              })
                .map((todo, index) => (
                  <li
                    className={ `task ${(
                      this.checkCompleted(todo) ? 'task-completed' : ''
                    )} ${(
                      this.checkSelected(todo) ? 'selected' : ''
                    )}` }
                    key={ index + 1 }
                  >

                    <Item content={ todo } />
                    <button
                      className="task-check-btn"
                      onClick={ () => addTaskToComplete(todo) }
                      type="button"
                    >
                      <FaCheck className="task-check-icon" />
                    </button>
                    <button
                      className="task-trash-btn"
                      disabled={ !selectedTodo.some(({ todoId }) => (
                        todoId === todo.todoId
                      )) }
                      onClick={ () => removeTodoFromList(todo) }
                      type="button"
                      data-testid="id-remove"
                    >
                      <FaTrashAlt className="task-trash-icon" />
                    </button>

                  </li>
                ))
            }
          </ul>
        )}
      </main>
    );
  }
}

App.propTypes = {
  listTodo: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodoFromList: PropTypes.func.isRequired,
  addTaskToComplete: PropTypes.func.isRequired,
  selectedTodo: PropTypes.arrayOf(PropTypes.object).isRequired,
  completedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  listTodo: state.todos.myTodos,
  selectedTodo: state.todos.selectedTodos,
  completedTasks: state.todos.completedTasks,
  filterType: state.todos.filterType,
});

const mapDispatchToProps = (dispatch) => ({
  removeTodoFromList: (todo) => dispatch(removeTodo(todo)),
  addTaskToComplete: (todo) => dispatch(completeTask(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
