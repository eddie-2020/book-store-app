import Btn from './Btn';
import SelectBooks from './SelectBooks';

const InputBooks = () => (
  <section>
    <div style={{ textAlign: 'center', fontFamily: 'cursive' }}>
      <h2>ADD NEW BOOKS</h2>
    </div>
    <div style={{ height: 2, backgroundColor: '#efefef', marginBottom: 30 }} />
    <div>
      <form
        style={{
          display: 'flex',
          marginBottom: 20,
          justifyContent: 'space-around',
        }}
      >
        <input
          style={{ padding: 10 }}
          className="input"
          type="text"
          placeholder="add books..."
        />
        <input
          style={{ padding: 10 }}
          className="input"
          type="text"
          placeholder="add author..."
        />
        <SelectBooks />
        <Btn type="submit" text="ADD BOOK" />
      </form>
    </div>
  </section>
);

export default InputBooks;
