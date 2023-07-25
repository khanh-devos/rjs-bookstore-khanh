import { PropTypes } from 'prop-types';
import Button from './Button';

export default function BookItem({ title, itemId }) {
  return (
    <li className="book-li">
      <h3 className="book-title-h3">{title}</h3>
      <Button itemId={itemId} />
    </li>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
