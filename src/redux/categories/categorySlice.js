import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Under construction'],
  amount: 0,
  isLoading: true,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
