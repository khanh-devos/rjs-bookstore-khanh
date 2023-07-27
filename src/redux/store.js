import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import { fetchDeleteBook } from './books/middleware';
import categoryReducer from './categories/categorySlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const res = getDefaultMiddleware().concat(fetchDeleteBook);
    return res;
  },
});

export default store;
