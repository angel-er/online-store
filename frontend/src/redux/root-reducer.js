import {combineReducers} from 'redux';

// import Auth from './auth/reducer';
// import App from './app/reducer';
// import ThemeSwitcher from './themeSwitcher/reducer';
// import LanguageSwitcher from './languageSwitcher/reducer';
// import Ecommerce from './ecommerce/reducer';
// import User from './user/reducer';
import Product from './product/reducer';

export default combineReducers({
  Product,
  // App,
  // Auth,
  // ThemeSwitcher,
  // LanguageSwitcher,
  // Ecommerce,
  // User,
});
