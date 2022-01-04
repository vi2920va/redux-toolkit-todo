import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { Edit, Save, Delete } from '@styled-icons/material';
import styled from 'styled-components';
import todos from '../../store/todos';

interface TodoProps {
  key: string,
  index: number
  todo: {
    id: string,
    value: string
  }
}
const TodoItem = ({ todo, index }: TodoProps) => {
  const [value, setValue] = useState<string>(todo.value || '');
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (event.type === 'change') {
      setValue(value);
    }
  };

  const handleDeleteClick = () => {
    dispatch(todos.actions.deleteTodo(index));
  };

  const handleEditClick = () => {
    setIsActive(true);

  }

  const handleSaveClick = () => {
    dispatch(todos.actions.saveTodo({ value, todo }));
    setIsActive(false);
    setValue('');
  }

  return (
    <Item>
      {!isActive && <span>{todo.value}</span>}
      {isActive &&
        <Input
          type="text"
          aria-label='todo edit'
          value={value}
          onChange={handleInputChange}
        />
      }
      <div>
        {!isActive &&
          <Btn onClick={handleEditClick}>
            <Edit />
          </Btn>
        }
        <Btn onClick={handleDeleteClick}>
          <Delete />
        </Btn>
        {isActive &&
          <Btn onClick={handleSaveClick}>
            <Save />
          </Btn>
        }
      </div>
    </Item>
  )
}

export default TodoItem;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.3rem;
  font-size: 1.25rem;
  background: rgba(105, 72, 72, 0.1);
`

const Input = styled.input`
  min-width: 75%;
  height: 2.2rem;
  font-size: 1.25rem;
`
const Btn = styled.button`
    width: 2.25rem;
    color: #fff;
    svg{
      width: 100%;
    }
`;