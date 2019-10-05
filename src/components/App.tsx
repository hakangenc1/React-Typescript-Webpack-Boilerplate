import React from 'react';
import { TodoApp } from './CustomComponents/TodoApp/TodoApp';
import { Spinner } from './CustomComponents/Spinner/Spinner';
export const App: React.FC = () => {
    return (
        <div>
            <h1>React Typescript Webpack Boilerplate</h1>
            <Spinner />
            <h2>Todo App</h2>
            <TodoApp />
        </div>
    )
}