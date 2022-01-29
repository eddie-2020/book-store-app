import styled from 'styled-components';

import BookList from '../components/BookStore';
import InputBook from '../components/InputBooks';
import Header from '../components/Header';

const BooksContainer = styled.div`
  padding: 1.813rem 6.25rem 16.563rem;
  
  @media (max-width: 992px){
    padding: 2rem;
  }
  @media (max-width: 768px){
    padding: 1rem;
  }
`;

const Books = () => (
  <BooksContainer>
    <Header />
    <BookList />
    <hr />
    <InputBook />
  </BooksContainer>
);

export default Books;
