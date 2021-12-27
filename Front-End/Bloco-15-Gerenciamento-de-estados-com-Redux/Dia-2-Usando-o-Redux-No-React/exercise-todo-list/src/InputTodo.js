import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, filterTask } from './actions/index';
import './styles/InputTodo.css';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  }

  addItem(value, callback) {
    const { todosList } = this.props;
    this.setState({ textTodo: '' });
    callback({ content: value, todoId: (todosList.length + 1) });
  }

  render() {
    const { addTodoInTheList, changeFilter } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">
          <input
            id="inputTodo"
            type="text"
            className="InputTodo-todo-input"
            value={ textTodo }
            placeholder="Adicione uma tarefa"
            onChange={ (e) => this.changeTextTodo(e.target.value) }
          />
        </label>
        <input
          id="btnAdd"
          type="button"
          value="Adicionar"
          onClick={ () => this.addItem(textTodo, addTodoInTheList) }
        />
        <label htmlFor="filter-select">
          <select
            id="filter-select"
            onChange={ ({ target }) => changeFilter(target.value) }
          >
            <option value="all">Todos</option>
            <option value="completed">Concluidos</option>
            <option value="uncompleted">Incompletos</option>
          </select>

        </label>
      </div>
    );
  }
}

InputTodo.propTypes = {
  addTodoInTheList: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  todosList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  todosList: state.todos.myTodos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoInTheList: (todo) => dispatch(addTodo(todo)),
  changeFilter: (filter) => dispatch(filterTask(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
