import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
}

const todos = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, acion: PayloadAction<string>) => {
      state.push({ id: Date.now().toString(), text: acion.payload });
      return state;
    },
  },
})



export default todos;