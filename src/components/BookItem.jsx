import { PropTypes } from 'prop-types';

export default function BookItem({ title, id, handleDelete }) {
  return (
    <li className="book-li">
      <h3>{title}</h3>
      <button type="button" name={id} onClick={handleDelete}>del</button>
    </li>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
