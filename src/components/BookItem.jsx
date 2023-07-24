import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

export default function BookItem({ title, id }) {
  const dispatch = useDispatch();
  return (
    <li className="book-li">
      <h3>{title}</h3>
      <button
        type="button" 
        name={id} 
        onClick={() => dispatch(removeBook(id))}
        >
          del
        </button>
    </li>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
