import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';
import ActiveBook from './reducer_active_book';
const rootReducers = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducers;