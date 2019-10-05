import React, { useState, ChangeEvent, FormEvent } from 'react'
import { AddTodo } from '../../types/types'
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

interface TodoForm {
    addTodo: AddTodo
}

export const TodoForm: React.FC<TodoForm> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    }
    return (
        <form>
            <Input name="newTodo" onChange={handleChange} placeholder="New Todo" value={newTodo} type="text" />
            <Button text="Add" type="primary" onClick={handleSubmit} />
        </form>
    )
}
