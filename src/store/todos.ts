import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  value: string;
}

const todos = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, acion: PayloadAction<string>) => {
      state.push({ id: nanoid(), value: acion.payload });
    },
    saveTodo: (state, action) => {
      const { value, todo } = action.payload;
      return state.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            value: value
          }
        }
        return item;
      })
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    }
  },
})


export default todos;
