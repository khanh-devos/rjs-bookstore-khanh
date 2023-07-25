import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import BookItem from './BookItem';

export default function Books() {
  const { books } = useSelector((store) => store.book);

  return (
    <div className="books">
      <AddNewBook />

      <ul className="books-ul">
        {
      books.map((book) => (
        <BookItem
          key={uuidv4()}
          title={book.title}
          itemId={book.item_id}
        />
      ))
      }
      </ul>
    </div>
  );
}
