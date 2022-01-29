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
      <div>
        <h2 style={{ textAlign: 'center', fontFamily: 'cursive' }}>ADD NEW BOOK</h2>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', position: 'fixed', top: 550, backgroundColor: '#d3d3d3', height: 80, borderRadius: 5,
      }}
      >
        <input type="text" className="input" ref={titleInput} style={{ padding: 10, margin: 70 }} placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <Select />
        <Button text="ADD BOOK" handleClick={submitBook} />
      </div>
    </section>
  );
};

export default InputBook;
