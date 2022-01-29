import { useDispatch } from 'react-redux';
import { v4 as uuid4v } from 'uuid';
import { useState, useRef } from 'react';

import Button from './Btn';
import SelectBooks from './SelectBooks';
import { addBook } from '../redux/Books/newBooks';

const inputBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const titleInput = useRef(null);

  const dispatch = useDispatch();

  const submitBook = () => {
    const newBook = {
      id: uuid4v(),
      title,
      author,
    };

    const response = () => title !== '' && author !== '' && dispatch(addBook(newBook));
    response(),
    titleInput.current.focus();
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <div>
        <h2>ADD NEW BOOK</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" ref={titleInput} placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Add Books Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <SelectBooks />
        <Button text="ADD BOOK" handleClick={submitBook} />
      </div>
    </section>
  );
};

export default inputBooks;
