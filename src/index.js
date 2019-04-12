import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoList from './components/TodoList/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import './index.css';

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={ 1 } done={ 3 }/>
            <div className="todo-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={ todoData }/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
