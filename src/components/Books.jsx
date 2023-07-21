import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook';
import BookItem from './BookItem';
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
      books.map((book) => (
        <BookItem
          key={uuidv4()}
          title={book.title}
          id={book.id}
          handleDelete={handleDelete}
        />
      ))
      }
      </ul>
    </div>
  );
}
