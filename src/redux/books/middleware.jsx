import axios from 'axios';
import { URL } from './bookSlice';

export const fetchDeleteBook = (store) => (next) => async (action) => {
  if (!action.type.includes('removeBook')) next(action);
  else {
    const { appId } = store.getState().book;
    const deleteBook = async () => {
      try {
        const res = await axios.delete(`${URL}${appId}/books/${action.payload}`);
        return res.data;
      } catch (err) {
        return err;
      }
    };

    const message = await deleteBook();
    if (message.includes('successfully')) next(action);
    else next({ ...action, payload: null });
  }
};

export const fetchAddBook = (store) => (next) => async (action) => {
  if (!action.type.includes('addBook')) next(action);
  else {
    const { appId } = store.getState().book;
    const add = async () => {
      try {
        const res = await axios.post(`${URL}${appId}/books`,
          action.payload,
          {
            headers: {
              'content-type': 'application/json',
            },
          });
        return res.data;
      } catch (err) {
        return err;
      }
    };

    await add();
    next(action);
  }
};
