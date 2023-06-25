import React, { FC, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { fetchTodos } from '../store/action-creators/todo';

const TodoList: FC = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(state => state.todo);
    const { fetchTodos, SetTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        <h1>Идет загрузка...</h1>
    }

    if (error) {
        <h1>{error}</h1>
    }


    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            {pages.map(p =>
                <span
                    onClick={() => SetTodoPage(p)}
                    style={{ padding: '5px', marginRight: '10px', border: p === page ? '1px solid red' : '1px solid black' }}>
                    {p}
                </span>
            )}

        </div>
    )
}

export default TodoList;