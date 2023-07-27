import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

export default function BookItem({ title, itemId }) {
  const dispatch = useDispatch();

  return (
    <li className="book-li">
      <h3 className="book-title-h3">{title}</h3>
      <button
        type="button"
        className="btn-type1"
        onClick={() => dispatch(removeBook(itemId))}
      >
        Del
      </button>
    </li>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
