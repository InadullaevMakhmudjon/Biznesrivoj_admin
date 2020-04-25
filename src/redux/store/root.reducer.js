import { combineReducers } from 'redux';
import auth from '../modules/auth/reducer';
import article from '../modules/article/reducer';
import error from '../modules/error/reducers';
import categories from '../modules/categories/reducer';

export default combineReducers({
  auth, article, categories, error,
});
