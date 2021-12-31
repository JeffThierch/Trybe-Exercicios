import { useState } from "react";

const useArray = () => {

  const [value, changeValue] = useState('')
  const [todos, changeTodos] = useState([])

  const addTodosInList = (todo) => {
    changeTodos((todos) => (
      [...todos, todo]
    ))
    changeValue('')
  }

  const removeTodo = (todo) => {
    const filterTodoList = todos.filter((item) => item !== todo)
    changeTodos(filterTodoList)
  }

  return [todos, addTodosInList, removeTodo, changeValue, value]
}

export default useArray