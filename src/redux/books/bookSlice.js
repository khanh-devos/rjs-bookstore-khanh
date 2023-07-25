import { createSlice } from '@reduxjs/toolkit';
import { BOOKS } from '../../components/data';

const initialState = {
  books: BOOKS,
  amount: 0,
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((b) => b.item_id !== payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
