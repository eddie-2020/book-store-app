import BookContainer from '../components/BookStore';
import Header from '../components/Header';
import InputBook from '../components/InputBooks';

const Books = () => (
  <div>
    <Header />
    <div style={{ padding: '10px 50px' }}>
      <BookContainer />
      <InputBook />
    </div>
  </div>

);

export default Books;
