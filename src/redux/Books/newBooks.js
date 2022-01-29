// Define Action Type
const ADD_BOOKS = 'bookStore/books/BOOK_ADDED';
const REMOVE_BOOKS = 'bookStore/books/BOOK_REMOVED';

// Export Actions Creator Function
export const addBook = (payload) => ({
  type: ADD_BOOKS,
  payload,
});

// Export Action Remover Function
export const removeBook = (payload) => ({
  type: REMOVE_BOOKS,
  payload,
});

// Set Initialize State
const initialState = [];

// Add Reducer Function For All Books
const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOKS:
      return [...state, payload];
    case REMOVE_BOOKS:
      return (state.filter(({ id }) => id !== payload.id));
    default:
      return state;
  }
};

export default bookReducer;
