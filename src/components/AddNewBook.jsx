import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import { CATEGORY } from './data';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.book);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const [title, author] = [form.title.value, form.author.value];
    if (!title.trim() || !author.trim()) return;

    const itemId = `item${books.length + 1}`;
    const newBook = {
      item_id: itemId,
      title,
      author,
      category: CATEGORY[Math.floor(Math.random() * 100) % 2],
    };

    dispatch(addBook(newBook));
  };

  return (
    <form className="addnewbook" onSubmit={handleSubmit}>
      <input className="anb-input" required name="title" type="text" placeholder="title" />
      <input className="anb-input" required name="author" type="text" placeholder="author" />

      <button className="anb-button btn-type1" type="submit">Add</button>
    </form>
  );
}
