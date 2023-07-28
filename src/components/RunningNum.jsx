import { PropTypes } from 'prop-types';

export default function RunningNumber({ num }) {
  // const [run, setRun] = useState(0);

  return (
    <div className="running">
      <div className="percentage">{`${num}%`}</div>
      <h3 className="current-chapter">Completed</h3>
    </div>
  );
}

RunningNumber.propTypes = {
  num: PropTypes.number.isRequired,
};
