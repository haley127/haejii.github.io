import { memo, useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = memo(({ todos, onRemove, onToggle }) => { // 데이터를 통으로 전달
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
                />
            );
        },
        [onRemove, onToggle, todos ]
    );
    
    return (
            <List className='TodoList'
                width={512} 
                height={513} 
                rowCount={todos.length} 
                rowHeight={57} 
                rowRenderer={rowRenderer} 
                list={todos} 
                style={{outline:'none'}} 
            />
    );
});

export default TodoList;