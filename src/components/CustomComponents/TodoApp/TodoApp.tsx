import React, { useState } from 'react'
import { Todo, ToggleTodo, AddTodo } from '../../types/types'
import { TodoList } from '../TodoList/TodoList'
import { TodoForm } from '../TodoForm/TodoForm'


const initialTodos: Array<Todo> = [
    { text: 'Buy milk', complete: true },
    { text: 'Buy bread', complete: false }
]


export const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);
    const toggleTodo: ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo;
        })
        setTodos(newTodos);
    }

    const addTodo: AddTodo = (newTodo) => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, complete: false }])
        }
    }
    return (
        <React.Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <TodoForm addTodo={addTodo} />
        </React.Fragment>
    )
}
