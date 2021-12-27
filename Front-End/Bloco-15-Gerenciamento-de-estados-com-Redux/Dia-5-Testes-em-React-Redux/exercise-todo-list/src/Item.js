import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectTodo, completeTask } from './actions/index';

function Item(props) {
  const { content, selectTodoInList, addToCompleted } = props;
  return (
    <div
      className="Item"
      data-testid="item"
      onClick={ () => selectTodoInList(content) }
      onKeyUp={ () => selectTodoInList(content) }
      onDoubleClick={ () => addToCompleted(content) }
      role="button"
      tabIndex="0"
    >
      { content.content }
    </div>
  );
}

Item.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  selectTodoInList: PropTypes.func.isRequired,
  addToCompleted: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedTodos: state.todos.selectedTodos,
});

const mapDispatchToProps = (dispatch) => ({
  selectTodoInList: (todo) => dispatch(selectTodo(todo)),
  addToCompleted: (todo) => dispatch(completeTask(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
