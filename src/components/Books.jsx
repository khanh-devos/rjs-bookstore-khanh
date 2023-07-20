import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook';
import BOOKS from './data';

export default function Books() {
  const [books, setBook] = useState(BOOKS);
  const handleDelete = (e) => {
    const newBooks = books.filter((b) => b.id.toString() !== e.currentTarget.name);
    setBook(newBooks);
  };

  return (
    <div className="books">
      <AddNewBook setBook={setBook} />
      <ul className="books-ul">
        {
      books.map((b) => (
        <li className="books-ul-li" key={uuidv4()}>
          <h3>{b.title}</h3>
          <button type="button" name={b.id} onClick={handleDelete}>del</button>
        </li>
      ))

    }
      </ul>
    </div>
  );
}
