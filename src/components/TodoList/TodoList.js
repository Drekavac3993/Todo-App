import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ tasks, onDeleted, onToggleDone, onToggleImportant }) => {

    const elements = tasks.map((item) => {
        const { id, ...itemProps } = item;

        return(
            <li key={ id } className="list-group-item">
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={ () => onToggleImportant(id) }
                    onToggleDone={ () => onToggleDone(id) }
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList
