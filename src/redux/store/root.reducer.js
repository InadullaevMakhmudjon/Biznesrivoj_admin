import { combineReducers } from "redux";
import auth from "../modules/auth/reducer";
import article from "../modules/article/reducer";
import error from "../modules/error/reducers";
import categories from "../modules/categories/reducer";
import users from "../modules/users/reducer";
import tgBooks from "../modules/tg-books/tgBooksReducer";
import tgSingleBook from "../modules/tg-single-book/tgSingleBookReducer";
import tgGifts from "../modules/tg-gifts/tgGiftReducer";
import tgSingleGift from "../modules/tg-single-gift/tgSingleGiftReducer";

export default combineReducers({
  auth,
  article,
  categories,
  error,
  users,
  tgBooks,
  tgSingleBook,
  tgGifts,
  tgSingleGift,
});
