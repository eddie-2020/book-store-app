import { useState } from 'react'; // Import UseState
import { useDispatch } from 'react-redux'; // Import UseDispatch
import { removeBook } from '../redux/Books/newBooks'; // Import Action Creator
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import proptypes from 'proptypes';
import Button from './Btn';

const Book = ({
  id, category, title, author, chapter,
}) => {
  const [percent, setPercent] = useState(10);

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook({ id }));
  };

  const handleClick = () => {
    setPercent((prevState) => (prevState >= 100 ? prevState : prevState + 10));
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#efefef',
      }}
    >
      <div>
        <p>
          {' '}
          {category}
          {' '}
        </p>
        <h2>
          {' '}
          {title}
          {' '}
        </h2>
        <span>
          {' '}
          {author}
          {' '}
        </span>
        <div>
          <button type="button">Comment</button>
          <button type="button" onClick={handleRemove}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="showProgress">
        <div style={{ width: '4.25rem', height: '4.25rem' }}>
          <CircularProgressbar
            value={percent}
            style={buildStyles({ pathColor: '#007bff' })}
          />
        </div>

        <div>
          <p>
            {' '}
            {percent}
            {' '}
            %
            {' '}
          </p>
          <p> Completed </p>
        </div>
      </div>

      <div className="chapter">
        <p style={{ textTransform: 'uppercase' }}>Current Chapter</p>

        <span>
          Chapter
          {chapter}
        </span>
        <Button text="UPDATE PROGRESS" handleClick={handleClick} />
      </div>
    </div>
  );
};

Book.proptypes = {
  id: proptypes.string.isRequired,
  category: proptypes.string.isRequired,
  title: proptypes.string.isRequired,
  author: proptypes.string.isRequired,
  author: proptypes.string.isRequired,
};

export default Book;
