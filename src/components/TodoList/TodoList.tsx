import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Form from '../Form/Form';
import styled from 'styled-components';


const TodoList = () => {
  const todos = useSelector((state: AppState) => state.todos);
  return (
    <Container>
      <Wrapper>
        <Title>Todo List</Title>
        <Explanation>Get things done. one item a time.</Explanation>
        <Form />
      </Wrapper>
    </Container>
  )
}


export default TodoList;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Wrapper = styled.div`
    width: 31.25rem;
    padding: 2rem 3rem 3rem;
    box-shadow: -1.25rem -1.25rem 0 0 rgba(214, 203, 203, 0.486);
    background: #ff6666e8;
    color: #fff;
`;

const Title = styled.h1`
    font-size: 2.2rem;
    letter-spacing: 0.18rem;
    border-bottom: 0.05rem solid rgba(255, 255, 255, .3);
    color: #fff;
`
const Explanation = styled.span`
    display: block;
    font-size: 0.875rem;
` 