import { memo } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = memo(({ todo, onRemove, onToggle, style }) => {
    const {id, text, checked} = todo;

    return (
        <div ClassName="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={()=> onRemove(id)}>
                    < MdDelete />
                </div>
            </div>
        </div>
    )
});

export default TodoListItem;