import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const initialState = {
  books: [],
  amount: 0,
  isLoading: true,
  appId: 'nVyv65C5UKzNo1GyVelG',
  message: null,
};

export const fetchGetBooks = createAsyncThunk(
  'book/fetchGetBooks',
  async (name, thunkAPI) => {
    const { appId } = thunkAPI.getState().book;
    try {
      const res = await axios.get(`${URL}${appId}/books`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const fetchAddBooks = createAsyncThunk(
  'book/fetchAddBooks',
  async (book, thunkAPI) => {
    const { appId } = thunkAPI.getState().book;
    try {
      const res = await axios.post(`${URL}${appId}/books`, book, {
        headers: {
          'content-type': 'application/json',
        },
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('book adding failed');
    }
  },
);

// export const fetchDeleteBooks = createAsyncThunk(
//   'book/fetchDeleteBooks',
//   async (bookId, thunkAPI) => {
//     const { appId } = thunkAPI.getState().book;
//     try {
//       const res = await axios.delete(`${URL}${appId}/books/${bookId}`);
//       return res.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue('book deleting failed');
//     }
//   },
// );

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({
      ...state,
      status: payload,
    }),
    removeBook: (state, { payload }) => ({
      ...state,
      books: state.books.filter((b) => b.item_id !== payload),
      amount: state.amount - 1,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetBooks.pending, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(fetchGetBooks.fulfilled, (state, { payload }) => {
        const arr = [];
        Object.entries(payload).forEach((item) => {
          const [key, value] = item;
          value[0].item_id = key;
          arr.push(value[0]);
        });

        return {
          ...state,
          isLoading: false,
          amount: arr.length,
          books: arr,
        };
      })
      .addCase(fetchGetBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(fetchAddBooks.fulfilled, (state, { payload }) => ({
        ...state,
        amount: state.amount + 1,
        message: payload,
      }))
      .addCase(fetchAddBooks.rejected, (state, { payload }) => ({
        ...state,
        message: payload,
      }));
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
