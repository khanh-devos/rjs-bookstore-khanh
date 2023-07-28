import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

export default function Title({
  title, category, author, itemId,
}) {
  const dispatch = useDispatch();

  return (
    <div className="book-li-part-1">
      <h3 className="book-category-h3">{category}</h3>
      <h3 className="book-title-h3">{title}</h3>
      <h3 className="book-author-h3">{author}</h3>

      <div className="title-btn-container">
        <button type="button" className="btn-type-2 book-author-h3">Comments</button>
        <button
          className="btn-type-2 book-author-h3 right-line"
          type="button"
          onClick={() => dispatch(removeBook(itemId))}
        >
          Remove
        </button>
        <button type="button" className="btn-type-2 book-author-h3">Edit</button>
      </div>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
