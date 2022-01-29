import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { displayBooks } from '../redux/books/books';
import Book from './Books';

const BookContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector(({ booksReducer }) => booksReducer.books);
  const loading = useSelector(({ loadingReducer }) => loadingReducer.loading);

  const chapter = () => Math.floor(Math.random() * 60);
  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (books.length === 0) return <h1 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: 14 }}>No books Added yet</h1>;

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} category={book.category} title={book.title} author={book.author} chapter={`${chapter()}`} id={book.id} />
      ))}
    </div>
  );
};

export default BookContainer;
