import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddBooks, fetchGetBooks } from '../redux/books/bookSlice';
import { CATEGORY } from './data';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const { books, amount } = useSelector((store) => store.book);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const [title, author] = [form.title.value, form.author.value];
    if (!title.trim() || !author.trim()) return;

    const allId = books.map((b) => parseInt(b.item_id.replace('item', ''), 10));
    const maxId = Math.max(...allId);
    const itemId = `item${maxId + 1}`;
    const newBook = {
      item_id: itemId,
      title,
      author,
      category: CATEGORY[Math.floor(Math.random() * 100) % 2],
    };

    dispatch(fetchAddBooks(newBook));
    form.reset();
  };

  useEffect(() => {
    dispatch(fetchGetBooks('ADD OK'));
  }, [amount, dispatch]);

  return (
    <div className="add-newB-container">
      <header className="add-nb-title">ADD NEW BOOK</header>
      <form className="addnewbook-form" onSubmit={handleSubmit}>
        <input className="anb-input" required name="title" type="text" placeholder="Book Title" />
        <input className="anb-input" required name="author" type="text" placeholder="Author" />

        <button className="anb-button btn-type1" type="submit">ADD BOOK</button>
      </form>
    </div>

  );
}
