import React from 'react'
import { Todo, ToggleTodo } from '../../types/types'
import './todo.scss'

interface TodoListItemProps {
    todo: Todo,
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = React.memo(({ todo, toggleTodo }) => {
    return (
        <div className='parent-div'>
            <label className={todo.complete ? 'complete' : undefined}>
                <input name="todo" type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
                {todo.text}
            </label>
        </div>
    )
})
