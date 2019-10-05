import React from 'react'
import { Todo, ToggleTodo } from '../../types/types'
import { TodoListItem } from '../TodoListItem/TodoListItem'

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <React.Fragment>
            {todos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </React.Fragment>
    )
}
