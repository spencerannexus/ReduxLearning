import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodos = state => state.todos

const TodoList = () => {
    //SK: useSelector lets your React components read data from the Redux store. 
    //SK: Also useSelector automatically subscribes to the Redux store for us so we do not need to call store.subscribe to listen for changes.
    const todos = useSelector(selectTodos)

    const renderedListItems = todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />
    })

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
