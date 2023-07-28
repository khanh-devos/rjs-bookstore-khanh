import { PropTypes } from 'prop-types';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import RunningNumber from './RunningNum';
import Title from './Title';

export default function BookItem({
  title, itemId, category, author,
}) {
  const percentage = parseInt(Math.random() * 100, 10);
  const myStyle = buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 1,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(2, 144, 255, ${Math.max(0.3, percentage / 100)})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  });

  return (
    <li className="book-li">

      <Title title={title} category={category} author={author} itemId={itemId} />

      <div className="book-li-part-2">
        <div className="circular-running-container">
          <div className="circular-progress">
            <CircularProgressbarWithChildren value={percentage} styles={myStyle} />
          </div>

          <RunningNumber num={percentage} />
        </div>

        <div className="chapter-container">
          <div className="child-chapter-container">
            <h3 className="current-chapter">CURRENT CHAPTER</h3>
            <h4 className="chapter-number">
              {`Chapter ${parseInt(Math.random() * 10, 10)}`}
              {itemId[itemId.length - 1]}
            </h4>
            <button
              type="button"
              className="btn-type1"
            >
              UPDATE PROGRESS
            </button>
          </div>
        </div>

      </div>
    </li>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
