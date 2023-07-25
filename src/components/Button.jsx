import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

export default function Button({ itemId }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn-type1"
      onClick={() => dispatch(removeBook(itemId))}
    >
      Del
    </button>
  );
}

Button.propTypes = {
  itemId: PropTypes.string.isRequired,
};
