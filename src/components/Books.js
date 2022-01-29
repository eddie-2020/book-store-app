import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

import Button from './Btn';
import { removeBookAPI } from '../redux/books/books';

const Book = ({
  id, category, title, author, chapter,
}) => {
  const [percent, setPercent] = useState(Math.floor(Math.random() * 99));

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookAPI(id));
  };

  const handleClick = () => {
    setPercent((prevState) => (prevState >= 100 ? prevState : prevState + 10));
  };

  return (
    <div
      className="renderer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff',
        padding: 10,
        margin: 20,
        borderRadius: 5,
      }}
    >
      <div>
        <p style={{ padding: 10 }}>{category}</p>
        <h2 style={{ padding: 10 }}>{title}</h2>
        <span style={{ padding: 10, marginBottom: 10 }}>{author}</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            type="button"
            style={{
              border: 'none', borderRadius: 5, fontWeight: 700, padding: 10, margin: 10,
            }}
          >
            Comments
          </button>
          <div>
            |
          </div>
          <button
            type="button"
            style={{
              border: 'none', borderRadius: 5, fontWeight: 700, padding: 10, margin: 10,
            }}
            onClick={handleRemove}
          >
            Remove
          </button>
          <div>
            |
          </div>
          <button
            type="button"
            style={{
              border: 'none', borderRadius: 5, fontWeight: 700, padding: 10, margin: 10,
            }}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div style={{ width: '4.25rem', height: '4.25rem' }}>
          <CircularProgressbar
            value={percent}
            styles={buildStyles({ pathColor: '#0290ff' })}
          />
        </div>
        <div>
          <p>
            {percent}
            %
          </p>
          <p>Completed</p>
        </div>
      </div>
      <div className="chapter">
        <p style={{ fontWeight: 700 }}>CURRENT CHAPTER</p>
        <span>
          Chapter
          {chapter}
        </span>
        <Button text="UPDATE PROGRESS" handleClick={handleClick} />
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
