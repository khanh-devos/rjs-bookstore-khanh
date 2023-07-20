import { PropTypes } from 'prop-types';

export default function AddNewBook({ setBook }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const [title, author] = [form.title.value, form.author.value];
    if (!title.trim() || !author.trim()) return;

    setBook((books) => {
      const newBook = {
        id: books[books.length - 1].id + 1,
        title,
        author,
        sold: Math.floor(Math.random() * 100),
      };

      return [...books, newBook];
    });
  };

  return (
    <form className="addnewbook" onSubmit={handleSubmit}>
      <input required name="title" type="text" placeholder="title" />
      <input required name="author" type="text" placeholder="author" />

      <button type="submit">Add</button>
    </form>
  );
}

AddNewBook.propTypes = {
  setBook: PropTypes.func.isRequired,
};
