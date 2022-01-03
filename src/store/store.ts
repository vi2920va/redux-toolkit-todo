import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now().toString(), text: action.payload });
    }
  }
})

export const store = configureStore({ reducer: todoSlice.reducer });


export const { addTodo } = todoSlice.actions;

export default store;