import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from '../../store/todos';
import { AppDispatch } from '../../store/store';
import styled from 'styled-components';

const Form = () => {
  const [value, setValue] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(todos.actions.addTodo(value));
    setValue('');
  }

  return (
    <AddForm onSubmit={handleFormSubmit}>
      <h2>Add to the todo list</h2>

      <AddInput
        type="text"
        aria-label="add input"
        value={value}
        onChange={handleInputChange}
      />
      <AddBtn>ADD ITEM</AddBtn>
    </AddForm>
  )
}

export default Form;

const AddForm = styled.form`
  margin-top: 1rem;
`;

const AddInput = styled.input`
    width: 78%;
    height: 2.2rem;
    border: 0;
    :focus{
      outline: 0;
    }
`;

const AddBtn = styled.button`
    width: 20%;
    height: 2.2rem;
    margin-left: 0.5rem;
    border: 1px solid rgba(255, 255, 255, .3);
    color: #888;
    cursor: pointer;
    
`;

