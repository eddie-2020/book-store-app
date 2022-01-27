import BookStore from '../components/BookConatainer';
import Header from '../components/Header';
import InputBooks from '../components/InputBooks';

const Books = () => (
  <div>
    <Header />
    <div style={{ height: 2, backgroundColor: '#efefef', marginBottom: 30 }} />
    <div>
      <div>
        <BookStore />
        <div>
          <InputBooks />
          <button type="submit" placeholder="delete" className="removeBtn">
            {' '}
            Delete
            {' '}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Books;
