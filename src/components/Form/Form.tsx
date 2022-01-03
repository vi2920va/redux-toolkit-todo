import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/store';

const Form = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <button type='submit'>ADD</button>
    </form>
  )
}

export default Form;
