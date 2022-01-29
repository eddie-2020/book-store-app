import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';

import Button from './Btn';
import Select from './SelectBooks';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const titleInput = useRef(null);

  const dispatch = useDispatch();

  const submitBook = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    const res = () => title !== '' && author !== '' && dispatch(addBook(newBook));
    res();
    titleInput.current.focus();
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <div style={{ textAlign: 'center', fontFamily: 'cursive' }}>
        <h2>ADD NEW BOOK</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <input type="text" style={{ padding: 10 }} className="input" ref={titleInput} placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" style={{ padding: 10 }} className="input" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Select />
        <Button text="ADD BOOK" handleClick={submitBook} />
      </div>
    </section>
  );
};

export default InputBook;
